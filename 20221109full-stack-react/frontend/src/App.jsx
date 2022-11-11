// import logo from "./logo.svg";
import { useState, useEffect, useCallback } from "react";
import "./App.css";
import CurrentTime from "./CurrentTime";

function App() {
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    console.log("only first render");
  }, []);

  useEffect(() => {
    console.log("currentTime has changed value");
  }, [currentTime]); //if currentTime changes, will do callback func

  useEffect(() => {
    console.log("every render");
  });

  const getCurrentTime = async () => {
    try {
      let response = await fetch("/slow");
      let vals = await response.json();
      console.log(vals);
      return setCurrentTime(vals.currentTime);
    } catch (ex) {
      console.log(ex);
    }
  };
  const clearCurrentTime 
  return (
    <div className="App">
      {currentTime && <CurrentTime currentTime={currentTime} />}
      
      <button onClick={getCurrentTime}> Get Current Time </button>
    </div>
  );
}

export default App;
