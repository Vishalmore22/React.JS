import { useState } from "react";
import "../Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="box">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
        }}
      >
        * 2
      </button>
      <button
        onClick={() => {
          setCount(count / 2);
        }}
      >
        / 2
      </button>
    </div>
  );
};

export default Counter;
