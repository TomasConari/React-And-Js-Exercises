import React, { useState } from "react";

export const Role = () => {
    const [user, setUser] = useState({ 
        username: "user123", 
        age: "25", 
        role: "admin", 
        time: "12:00"
    });

    const changeRole = () => {
        setUser((prevUser) => ({ ...prevUser, role: "guest" }));
    };

    return (
        <div>
            <h2>Username: {user.username}</h2>
            <h2>Role: {user.role}</h2>
            <button onClick={changeRole}>Change Role</button>
        </div>
    );
};