import React, { createContext, useState, useContext } from "react";

export const Authuser = createContext();

export default function Auth({ children }) {
  const loginUser = localStorage.getItem("data_save");
  let parsedUser = undefined;

  if (loginUser) {
    try {
      parsedUser = JSON.parse(loginUser);
    } catch (error) {
      console.error("Failed to parse loginUser from localStorage", error);
      parsedUser = undefined;
    }
  }

  const [isAuthenticated, setIsAuthenticated] = useState(parsedUser);

  return (
    <Authuser.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {children}
    </Authuser.Provider>
  );
}

export const useAuth = () => useContext(Authuser);
