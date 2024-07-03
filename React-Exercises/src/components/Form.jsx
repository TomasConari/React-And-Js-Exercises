import { useState } from "react";

export const Form = () => {

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        number: ""
    });

    const handleOnlyWords = (event, key) => {
        const updatedInput = event.target.value;
        if(!(/\d/.test(updatedInput))){
            setForm((prevForm) => ({ ...prevForm, [key]: updatedInput }));
        };
    };
    const handleOnlyNumber = (event) =>{
        const updatedInput = event.target.value;
        if(!isNaN(updatedInput)){
            setForm((prevForm) => ({ ...prevForm, number: updatedInput }));;
        };
    };

    return(
        <div>
            <label>Name: </label>
            <input value={form.name} onChange={(event) => handleOnlyWords(event, "name")}></input>
            <label>Lastname: </label>
            <input value={form.lastname} onChange={(event) => handleOnlyWords(event, "lastname")}></input>
            <label>Email: </label>
            <input value={form.email} onChange={(event) => handleOnlyWords(event, "email")}></input>
            <label>Number: </label>
            <input value={form.number} onChange={handleOnlyNumber}></input>
        </div>
    );
};