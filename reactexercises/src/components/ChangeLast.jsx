import React, { useState } from "react";

export const ChangeLastName = () => {
    const [person, setPerson] = useState({ 
        firstName: "Alice", 
        lastName: "Smith" 
    });

    const changeLastName = () => {
        setPerson({ ...person, lastName: "Johnson" });
    };

    return (
        <div>
            <h2>Name: {person.firstName}</h2>
            <h2>Lastname: {person.lastName}</h2>
            <button onClick={changeLastName}>Change Lastname</button>
        </div>
    );
};