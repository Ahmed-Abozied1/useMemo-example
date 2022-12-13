import React from "react";

const ViewText=({text})=>{



console.log("view text compopnent");

const apiconnect=()=>{

  for(let i=0;i<=500_000_000;i++){}
  console.log("view textApi component");
}
apiconnect();
return(
<div className="box">
<p>text include :</p>
  <p>{text.name}</p>
</div>
)

}

export default  React.memo(ViewText);