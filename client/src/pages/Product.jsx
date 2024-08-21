import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Product() {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3001/api/product/allProduct")
            .then((res) => {
                return res.json();
            }).then((res) => {
                setProduct(res);
                console.log(res);
            })
    }, []);

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:3001/api/product/deleteProduct/${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                alert('Document deleted Successfully')
                window.location.reload();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1 className='font-bold text-3xl ms-2 text-violet-950 my-2'>Product List</h1>
            <button className='m-2 bg-violet-500 px-3 py-1 rounded-md text-white' onClick={() => navigate("/productAdd")}>Add</button>
            <div className='flex'>
                {
                    product.map((data, index) => {
                        return (
                            <>
                                <div className='border-2 p-2 m-2'>
                                    <div key={index} className='flex-col' onClick={() => navigate(`/product/${data._id}`)}>
                                        <div><img src={data.image} className='w-[300px] h-[300px]' alt='...' /></div>
                                        <div>Category : {data.category}</div>
                                        <div>Name : {data.name}</div>
                                        <div>Price : {data.price}</div>
                                    </div>
                                    <button className='bg-primary py-1 px-3 rounded-lg text-white me-2' onClick={() => navigate(`/productEdit/${data._id}`)}>Edit</button>
                                    <button className='bg-red-700 py-1 px-2 rounded-lg text-white' onClick={() => handleDelete(data._id)}>Delete</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
