import React from "react";

function StepItem({step}) {
  return (
      <div>
        {/*<img src={step.img} alt={1}/>*/}
        <p>img</p>
        <p>{step.description}</p>
      </div>
  )
}


export default StepItem
