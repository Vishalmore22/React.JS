import "./App.css";
import fruits from "./data";//when you import singal thing use this 
import { vegetables, cars } from "./data";//when you import multiple thing alwayas write in curly brces ->{}

const App = () => <>
  {fruits.map(fruit => <p>{fruit}</p>)}
  {<hr />}
  {vegetables.map(v => <p>{v}</p>)}
  {<hr />}
  {cars.map(car => <p>{car}</p>)}
</>
//when we import array from js in component java scripts must be writen in curly brace -> {}
//when we use map we have to return some value but in component its return in html element  

export default App;
//