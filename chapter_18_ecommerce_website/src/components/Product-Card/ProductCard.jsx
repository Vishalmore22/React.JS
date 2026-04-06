import React from 'react'
import { useNavigate } from 'react-router'

export default function ProductCard({ name, image, des, price, addTocart, cate }) {
    const navigate = useNavigate();
    return (
        <div className='card w-25 p-3 shadow rounded-5'>
            <img width={200} src={image} className='m-auto'/>
            <p className='fw-bold'>{name}</p>
            <p className='fs-6 mb-4'>{des}</p>
            <p className='fs-6 mb-4'>${price}</p>
            <div>
                <button className="btn btn-outline-primary mx-1" onClick={() => addTocart({ name, image, price, qty: 1 })}>Add to Cart</button>
                <button className="btn btn-warning mx-1" onClick={() => {
                    navigate("/detail", { state: { name, image, des, price, cate } })
                }}>View</button>
            </div>
        </div>
    )
}


// prop