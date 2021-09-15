import React from "react";
import "./style.css"
const Spinner=()=>{
  return (
    <div className="intersecting-circles-spinner">
      <div className="spinnerBlock">
        <span className="circle"/>
        <span className="circle"/>
        <span className="circle"/>
        <span className="circle"/>
        <span className="circle"/>
        <span className="circle"/>
        <span className="circle"/>
      </div>
    </div>
  )

}
export default Spinner