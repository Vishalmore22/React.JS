import { fruits } from "../Products";
import "../Fruits.css";
const Fruits = () => {
  return (
    <>
      <div className="fruit-container">
        {fruits.map((fruit, index) => (
          <div className="fruit-card" key={index}>
            <h2>{fruit.emoji}</h2>
            <p>{fruit.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fruits;
