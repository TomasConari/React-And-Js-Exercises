import React, { useState } from "react";

export const BorderChange = () => {

    const [style, setStyle] = useState({ 
        border: "1px solid black",
        borderRadius: "5px",
    });

    const changeBorder = () => {
        setStyle((prevStyle) => ({...prevStyle, border: prevStyle.border === "1px solid black" ? "none" : "1px solid black"}));
    };

    return (
        <div>
            <div style={{ ...style, width: "200px", height: "100px" }}>
                Bordered Block
            </div>
            <button onClick={changeBorder}>Change Border</button>
        </div>
    );
};