import React, { useState } from "react";

export const FontWeight = () => {
    const [textStyle, setTextStyle] = useState({ 
        color: "black", 
        fontWeight: "bold" 
    });

    const changeTextStyle = () => {
        setTextStyle({ color: "red", fontWeight: "normal" });
    };

    return (
        <div>
            <h2 style={textStyle}>Font Weigth and Background</h2>
            <button onClick={changeTextStyle}>Change Font Weigth</button>
        </div>
    );
};