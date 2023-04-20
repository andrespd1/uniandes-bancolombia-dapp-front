import React, { useState, createContext, useEffect } from "react";
  
export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    async function updateUser(newValue) {
        setUser(newValue);
      }
      useEffect(() => {
        console.log(user);
      }, [user]);
  
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};