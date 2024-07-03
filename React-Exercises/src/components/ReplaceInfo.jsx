import { useState } from "react";

export const ReplaceInfo = () => {

    const [form, setForm] = useState(["", "", "", ""]);

    const handleOnlyWords = (event, i) => {
        const updatedInput = event.target.value;
        if (!/\d/.test(updatedInput)){
            const updatedForm = [...form];
            updatedForm[i] = updatedInput;
            setForm(updatedForm);
        };
    };
    
    const handleOnlyNumber = (event) => {
        const updatedInput = event.target.value;
        if(!isNaN(updatedInput)){
            const updatedForm = [...form];
            updatedForm[3] = updatedInput;
            setForm(updatedForm);
        };
    };

    return (
        <div>
            <label>Name: </label>
            <input value={form[0]} onChange={(event) => handleOnlyWords(event, 0)}></input>
            <label>Lastname: </label>
            <input value={form[1]} onChange={(event) => handleOnlyWords(event, 1)}></input>
            <label>Email: </label>
            <input value={form[2]} onChange={(event) => handleOnlyWords(event, 2)}></input>
            <label>Number: </label>
            <input value={form[3]} onChange={handleOnlyNumber}></input>
        </div>
    );
};
