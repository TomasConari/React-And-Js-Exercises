import React, { useState } from "react";

export const ChangingColor = () => {

  const [style, setStyle] = useState({
    color: "blue",
    textDecoration: "underline",
  });

  const changeColor = () => {
    setStyle((prevStyle) => ({...prevStyle, color: prevStyle.color === "blue" ? "red" : "blue"}));
  };

  return (
    <div>
      <h2 style={style}>Styled text</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};