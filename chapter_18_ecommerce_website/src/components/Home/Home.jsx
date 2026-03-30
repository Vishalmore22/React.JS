import React, { useEffect, useState } from 'react'

export default function Home() {

    useEffect(() => {
        fetchProducts()
    }, []);

    const [products, setProducts] = useState([]);

    async function fetchProducts() {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
        // console.log(products);
        // first we fetch data from website and store in variable but if want to show data we have to store data in state
    }

    const addTocart = (value) => {
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        cartList.push(value);
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    return (
        <div className='container d-flex justify-content-center flex-wrap gap-3 p-5'>
            {
                products.map((product, i) =>
                    <div key={i} className='card w-25 h-25 p-3'>
                        <p>{product.title}</p>
                        <img src={product.images[0]} alt="" />
                        <button className="btn btn-warning" onClick={() => addTocart(product)}>Add to Cart</button>
                    </div>)
            }
        </div >
    )
}
