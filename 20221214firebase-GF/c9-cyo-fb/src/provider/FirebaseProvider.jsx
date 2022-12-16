import React from "react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWbCgP3ChIRfgZbC_dq7-t_pOdSd_R8Y0",
  authDomain: "c9-cyo-fb.firebaseapp.com",
  projectId: "c9-cyo-fb",
  storageBucket: "c9-cyo-fb.appspot.com",
  messagingSenderId: "988079614571",
  appId: "1:988079614571:web:32715c0bca165de9245f2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseContext = React.createContext();
export const FirebaseProvider = (props) => {
  const { children } = props;
  const theValue = { app };
  return (
    <FirebaseContext.Provider value={theValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
