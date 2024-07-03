import { useState } from "react";

export const Numbers = () =>{

    const [numbers, setNumbers] = useState([0]);
    const [count, setCount] = useState(1);

    const addNumber = () =>{
        setNumbers((prevNumber) => [...prevNumber, count]);
        setCount((prevCount) => prevCount += 1);
    };

    return(
        <div>
            <button onClick={addNumber}>Add</button>
            <h4>{numbers}</h4>
        </div>
    );
};