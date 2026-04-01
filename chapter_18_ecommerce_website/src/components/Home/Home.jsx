import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../Product-Card/ProductCard';

export default function Home() {

    useEffect(() => {
        fetchProducts()
    }, []);

    const [products, setProducts] = useState([]);

    // async function fetchProducts() {
    //     const res = await fetch("https://dummyjson.com/products");
    //     const data = await res.json();
    //     setProducts(data.products);
    //     // console.log(products);
    //     // first we fetch data from website and store in variable but if want to show data we have to store data in state
    // }

    //axios 
    const fetchProducts = async () => {
        const res = await axios.get("https://dummyjson.com/products");
        setProducts(res.data.products);

    }


    const addTocart = (value) => {
        console.log("cakkk");
        
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];
        cartList.push(value);
        console.log(cartList);
        
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    return (
        <div className='container d-flex justify-content-center flex-wrap gap-3 p-5'>
            {
                products.map((product, i) => <ProductCard key={i} name={product.title} image={product.images[0]} des={product.description} price={product.price} addTocart={addTocart} />)

            }
        </div >
    )
}
