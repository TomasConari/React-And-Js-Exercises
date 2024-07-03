import React, { useState } from "react";

export const FontSize = () => {
    const [style, setStyle] = useState({ 
      backgroundColor: "red", 
      fontSize: "16px" 
    });

    const changeStyle = () => {
      setStyle({ backgroundColor: "blue", fontSize: "20px" });
    };

    return (
      <div style={style}>
        <h2>Component Back and Font Size</h2>
        <button onClick={changeStyle}>Change Font Size</button>
      </div>
    );
};
