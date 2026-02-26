import { products } from "./products.js";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ++
      </button>

      {/* {products.map(product => <div className='card' key={product.id}>
      <p className="title">{product.title}</p>
      <p className="category">- {product.category}</p>
      <p className="price"> {product.price}/-</p>
    </div>)}
    <div className="card">
      <p className="title">Total :</p>
    </div> */}
    </>
  );
};

export default App;
