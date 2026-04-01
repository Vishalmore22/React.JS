import React, { useState } from 'react'

export default function Cart() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    return (
        <div className='container d-flex justify-content-center flex-wrap gap-3 p-5'>
            {
                products.map((product, i) =>
                    <div key={i} className='card w-25 h-25 p-3'>
                        <p>{product.name}</p>
                        <img src={product.image} alt="" />
                        <button onClick={() => {
                            const arr = [...products];
                            arr.splice(i, 1);
                            localStorage.setItem("cart", JSON.stringify(arr));
                            setProducts(arr);
                        }} className='btn btn-danger w-100'>Remove</button>
                    </div>)
            }
        </div>
    )
}
