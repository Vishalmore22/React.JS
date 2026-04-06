import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../Product-Card/ProductCard';

export default function Home() {

    useEffect(() => {
        fetchProducts()
    }, []);

    const [products, setProducts] = useState([]);
    const [Search, setSearch] = useState("");
    const [isClicked, setClick] = useState(true);

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
        const cartList = JSON.parse(localStorage.getItem("cart")) || [];

        const res = cartList.findIndex((e) => e.name == value.name);
        if (res == -1) {
            cartList.push(value);
        }
        if (res != -1) {
            cartList[res].qty++;
        }
        localStorage.setItem("cart", JSON.stringify(cartList));
    }

    const searchProduct = () => {
        const result = products.filter((product) => product.title.toLowerCase().includes(Search.toLowerCase()));
        setProducts(result);
    }

    const sortProducts = () => {
        setClick(!isClicked);
        const copy = [...products];
        copy.sort((a, b) => (isClicked) ? a.price - b.price : b.price - a.price);
        setProducts(copy);
    }

    return (
        <>
            <div className='my-5 text-center'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='border-1 rounded-5 ps-2 py-2 me-2 bg-light w-25' />
                <button className='btn btn-outline-success rounded-5 py-2 me-2' onClick={searchProduct}>Search</button>
                <button className='btn btn-outline-success rounded-5 py-2 me-2' onClick={fetchProducts}>Reset</button>
                <button className='btn btn-outline-success rounded-5 py-2' onClick={sortProducts}>Sort</button>
            </div>
            <div className='container d-flex justify-content-center flex-wrap gap-3 p-5'>
                {
                    products.map((product, i) => <ProductCard key={i} name={product.title} image={product.images[0]} des={product.description} price={product.price} cate={product.category} addTocart={addTocart} />)

                }
            </div >
        </>
    )
}
