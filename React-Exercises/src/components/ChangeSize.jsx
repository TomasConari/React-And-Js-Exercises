import React, { useState } from "react";

export const ChangeSize = () => {
    const [sizes, setSizes] = useState([16, 24]);

    const increaseSize = () => {
        const newSizes = [sizes];
        newSizes[0] += 2;
        setSizes(newSizes);
    };

    return (
        <div>
            <h2 style={{ fontSize: sizes[0] }}>Tittle</h2>
            <button onClick={increaseSize}>More Size</button>
        </div>
    );
};