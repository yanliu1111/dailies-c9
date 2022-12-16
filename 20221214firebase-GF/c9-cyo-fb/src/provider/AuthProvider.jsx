import React, { createContext } from "react";
import { useState } from "react";
export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const children = props.children;
  const [user, setUser] = useState(null);
  const theValue = { user };
  return (
    <AuthContext.Provider value={theValue}>{children}</AuthContext.Provider>
  );
};
