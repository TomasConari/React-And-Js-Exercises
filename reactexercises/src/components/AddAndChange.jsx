import React, { useState } from "react";

export const AddAndChange = () => {
    const [colors, setColors] = useState(["blue", "red"]);

    const changeColor = () => {
        const newColors = [...colors];
        newColors[0] = "green";
        setColors(newColors);
    };

    return (
        <div>
            <h2 style={{ color: colors[0] }}>Colored Text</h2>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};
