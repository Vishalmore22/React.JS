import React, { useState, useEffect } from 'react'

export default function Cart() {

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);

    const countTotal = () => {
        let sum = 0;
        products.forEach(element => {
            sum = sum + (element.price * element.qty);
        });
        setTotal(sum);
    }

    useEffect(() => {
        countTotal();
    }, [])

    return (
        <>
            <div className='container d-flex justify-content-center flex-wrap gap-3 p-5'>
                {
                    products.map((product, i) =>
                        <div key={i} className='card w-25 h-25 p-3'>
                            <p>{product.name}</p>
                            <img src={product.image} alt="" />
                            <p className='fs-4'><button className='btn btn-white fs-6' onClick={() => { countTotal(product.qty++) }}>+</button>{product.qty}<button className='btn btn-white fs-5' onClick={() => { countTotal(product.qty--) }}>-</button></p>
                            <p>{product.price}</p>
                            <button onClick={() => {
                                const arr = [...products];
                                arr.splice(i, 1);
                                localStorage.setItem("cart", JSON.stringify(arr));
                                setProducts(arr);
                            }} className='btn btn-danger w-100'>Remove</button>
                        </div>)}
            </div>
            <div>
                <h2>Total: {total}</h2>
            </div>
        </>
    )
}
