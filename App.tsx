import * as React from 'react';
import './style.css';
 import ViewCounter from "./ViewCounter.js";
 import ViewText from "./ViewText.js";
export default function App() {

  const [count,setCount]=React.useState(0);
const name ={name : "Ahmed"};

  const handlerCounter=()=>{
    setCount((prev)=> prev +1);
  }

  console.log("app component")
  return (
    <div>
      <ViewCounter num={count} increaseCounter={handlerCounter}/>
      <ViewText text={name}/>
    </div>
  );
}
