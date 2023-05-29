import React, { useState } from "react";

export const UserEmail = () => {
    const [user, setUser] = useState({ 
        username: "user1", 
        email: "user@example.com" 
    });
    
    const [updatedEmail, setUpdatedEmail] = useState("");

    const writeEmail = (event) => {
        const newEmail = event.target.value;
        setUpdatedEmail(newEmail);
    };

    const updateEmail = () => {
        setUser({ ...user, email: updatedEmail });
    };

    return (
        <div>
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email}</h2>
        <label>New Email: </label>
        <br />
        <input value={updatedEmail} onChange={writeEmail}></input>
        <button onClick={updateEmail}>Update User</button>
        </div>
    );
};
