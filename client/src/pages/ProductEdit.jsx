import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductEdit() {

    const [product, setProduct] = useState({})
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/api/product/oneProduct/" + params.id)
            .then((res) => {
                return res.json();
            }).then((res) => {
                setProduct(res);
            })
    },params.id)

    const onchange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleEdit = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/product/editProduct/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: product.name,
                    category: product.category,
                    price: product.price,
                    image: product.image,
                }),
            }
            );
            const json = await response.json();
            console.log(json);
            if (response.status === 200) {
                alert("Product edited Successfully")
                navigate('/product')
            } else {
                alert("Enter Credentials Properly")
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
      <div className='flex flex-col'>
          <div className='my-2'>
              Category : <input type='text' name='category' value={product.category} onChange={onchange} />
          </div>
          <div className='my-2'>
              Name : <input type='text' name='name' value={product.name} placeholder='Enter Name' onChange={onchange} />
          </div>
          <div className='my-2'>
              Price : <input type='number' name='price' value={product.price} placeholder='Enter Price' onChange={onchange} />
          </div>
          <div className='my-2'>
              Image : <input type='text' name='image' value={product.image} placeholder='Enter Image' onChange={onchange} />
          </div>
          <button className='bg-primary' onClick={() => handleEdit(product._id)} >Submit</button>
      </div>
  )
}
