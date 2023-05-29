import React, { useState } from "react";

export const Info = () => {
  const [userInfo, setUserInfo] = useState({ 
    name: "John", 
    age: 25 
  });

  const updateUserInfo = () => {
    setUserInfo({ name: "Jane", age: 30 });
  };

  return (
    <div>
      <h2>Name: {userInfo.name}</h2>
      <h2>Age: {userInfo.age}</h2>
      <button onClick={updateUserInfo}>Update Info</button>
    </div>
  );
};