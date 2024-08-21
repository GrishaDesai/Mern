import product from "../models/product.model.js"

export const ProductGet = async (req, res, next) => {
    try {

        const allProduct = await product.find({});
        console.log(allProduct);
        res.send(allProduct);

    } catch (error) {

        console.error(error.message);
        res.send({ err: error });

    }
}

export const ProductGetOne = async (req, res, next) => {

    try {

        const id = req.params.id;
        const oneProduct = await product.findById(id);
        res.send(oneProduct);

    } catch (error) {
        res.send({ error: error })
    }

}

export const ProductAdd = async (req, res, next) => {

    const {
        category,
        name,
        price,
        image
    } = req.body

    console.log(category, name, price, image);
    

    const newProduct = new product({
        category,
        name,
        price,
        image
    })

    console.log("new product - ",newProduct);

    try {
        await newProduct.save();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false });
    }


}

export const ProductEdit = async (req, res, next) => {

    const { category, name, image, price } = req.body
    const id = req.params.id;
    try {

        const response = await product.updateOne({ _id: id }, {
            $set: {
                category, name, image, price
            }
        });
        if (response.matchedCount === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product updated successfully', id: id });
        }

    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

}

export const ProductDelete = async (req, res, next) => {
    try {

        const deleteProduct = await product.findByIdAndDelete(req.params.id);
        if (!deleteProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.send({ success: true });
    }
}