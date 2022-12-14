import * as React from 'react';
import './style.css';
 import ViewCounter from "./ViewCounter.js";
 import ViewText from "./ViewText.js";
import {useCallback,useMemo,useState} from "react";
export default function App() {

  const [count,setCount]=useState(0);
  const [user,setUser]=useState({  name : "Ahmed"});
const name =useMemo(()=>{
  return user;
},[user])

const handleAge=useCallback(()=>{

  setUser((prev)=>{
    if(prev.age)
    {
      return prev;
    }
    else
    return{...prev,age:26}
  
  
  })

 


},[])


  const handlerCounter=()=>{
    setCount((prev)=> prev +1);
  }

  return (
    <div>
      <ViewCounter num={count} increaseCounter={handlerCounter}/>
      <ViewText addAge={handleAge} text={name}/>
    </div>
  );
}
