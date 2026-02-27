import { products } from "../Products.js";
import { useState, useEffect } from "react";
import "../Products.css";

const Products = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    countTotal();
  }, []);

  const countTotal = () => {
    let sum = 0;
    products.forEach((product) => {
      sum = sum + product.price;
    });
    setTotal(sum.toFixed(2));
  };

  return (
    <>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}/-</p>
        </div>
      ))}
      <div className="card">
        <p className="title">Total : {total}/- </p>
      </div>
    </>
  );
};

export default Products;
