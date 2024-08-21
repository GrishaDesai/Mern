import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetail() {
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
    }, params.id)
    return (
        <div className='flex justify-center'>
            <div>
                <div className='border-2 border-gray-400 my-2 py-2 rounded-lg'><img src={product.image} className='w-[300px] h-[300px]' alt='...' /></div>
                <div><span className='font-bold text-lg'>Category</span> : {product.category}</div>
                <div><span className='font-bold text-lg'>Name</span> : {product.name}</div>
                <div><span className='font-bold text-lg'>Price</span> : {product.price}</div>
            </div>
        </div>
    )
}
