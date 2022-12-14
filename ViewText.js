import React from "react";

const ViewText=({text,addAge})=>{



console.log("view text compopnent");

const apiconnect=()=>{

  for(let i=0;i<=500_000_000;i++){}
  console.log("view textApi component");
}
apiconnect();
return(
<div className="box">
<p>text include :</p>
<button onClick={addAge}>addAge</button>
  <p>{text.name}</p>
  <p>{text.age}</p>
</div>
)

}

export default  React.memo(ViewText);