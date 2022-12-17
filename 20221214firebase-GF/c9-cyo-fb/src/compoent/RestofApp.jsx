import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FirebaseContext } from "../provider/FirebaseProvider";

export const RestofApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;
  const authContext = useContext(AuthContext);
  const user = authContext.user;
  return (
    <div className="App">
      {user ? `you are logged in as ${user.email}` : "you are not logged in"}
    </div>
  );
};
