import React, { useState } from "react";

export const TextStyle = () => {
    const [styles, setStyles] = useState(["underline", "italic"]);

    const changeStyle = () => {
        const newStyles = [...styles];
        newStyles[0] = "none";
        setStyles(newStyles);
    };

    return (
        <div>
            <p style={{ textDecoration: styles[0], fontStyle: styles[1] }}>Decorated paragraph</p>
            <button onClick={changeStyle}>Change</button>
        </div>
    );
};