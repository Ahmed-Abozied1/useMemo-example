import React from "react";

const ViewCounter=({num,increaseCounter}) =>{
console.log("view counter component");


  return(
    <div className="App">
<p>{num}</p>

<button onClick={increaseCounter}>increase</button>
    </div>
  )
}

export default ViewCounter;