import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildrenColor] = useState("blue")

  function handleChangeColor(newChildColor){
      const newRandomColor = getRandomColor();
      setColor (newRandomColor)
      setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child changeColor={handleChangeColor} color={childColor} />
      <Child changeColor={handleChangeColor} color={childColor} />
    </div>
  );
}

export default Parent;
