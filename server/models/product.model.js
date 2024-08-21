import mongoose from "mongoose";

const productTable = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            multipleOf: 0.01
        }
    }
)
const product = mongoose.model("Product", productTable);
export default product;