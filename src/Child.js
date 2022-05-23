import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ changeColor, color }) {
  function handleClick() {
    const newColor = getRandomColor();
    changeColor(newColor)
  }


  return (
  <div 
  onClick={handleClick} 
  className="child" 
  style={{ backgroundColor: color }} 
  />)
}

export default Child;
