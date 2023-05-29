import React, { useState } from "react";

export const ChangeOpacity = () => {
    const [opacity, setOpacity] = useState([1, 0.5]);

    const changeOpacity = () => {
        const newOpacity = [...opacity];
        newOpacity[0] = newOpacity[0] === 1 ? 0.5 : 1;
        setOpacity(newOpacity);
    };

    return (
        <div>
        <h2 style={{ opacity: opacity[0] }}>Visible Tittle</h2>
        <button onClick={changeOpacity}>Change Visibility</button>
        </div>
    );
};