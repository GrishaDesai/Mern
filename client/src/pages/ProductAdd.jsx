import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ProductAdd() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(category, name, price, image);
      
      const response = await fetch("http://localhost:3001/api/product/addProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: category,
            name: name,
            price: price,
            image: image
          })
        }
      )
      if (response.status === 200) {
        alert("Product added Successfully")
        navigate("/product")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex flex-col'>
      <div className='my-2'>
        Category : <input type='text' placeholder='Enter Category' onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div className='my-2'>
        Name : <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='my-2'>
        Price : <input type='number' placeholder='Enter Price' onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className='my-2'>
        Image : <input type='text' placeholder='Enter Image' onChange={(e) => setImage(e.target.value)} />
      </div>
      <button className='bg-primary ' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
