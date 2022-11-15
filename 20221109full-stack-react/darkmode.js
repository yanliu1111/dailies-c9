import "./App.css";
import { useEffect as useMyEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

const darkModeStyles = {
  background: "black",
  color: "white",
};
const lightModeStyles = {
  background: "white",
  color: "orange",
};

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [darkMode, setDarkMode] = useState("light");
  const toggleDarkMode = () => {
    setDarkMode((curr) => {
      console.log(curr);
      if (curr === "light") {
        return "dark";
      }
      return "light";
    });
  };
  const getCurrentWeather = async () => {
    console.log("hello from getCurrentTime");
    try {
      let response = await fetch("/weather");
      let values = await response.json();
      console.log(values);
      setCurrentWeather(values);
    } catch (ex) {
      console.log(ex);
    }
  };

  useMyEffect(() => {
    console.log("hello from useEffect");
    const id = setInterval(() => {
      console.log("hello from interval");
      getCurrentWeather();
    }, 3000);

    return () => clearInterval(id);
  }, []);
  const clearCurrentTime = () => setCurrentWeather(null);
  return (
    <div style={darkMode === "dark" ? darkModeStyles : lightModeStyles}>
      {/* <div className="container"> */}
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      <button onClick={getCurrentWeather}> Get Current Weather </button>
      <button onClick={clearCurrentTime}> Clear Current Weather</button>
      <button onClick={toggleDarkMode}>
        Dark Mode {darkMode === "dark" ? "On" : "Off"}
      </button>
    </div>
  );
}

export default App;

////////CSS
/* example of how to do dark mode based on the user's browser preference */
body {
    height: 100vh;
    background-color: white;
    color: black;
  }
  /* check user prefers dark mode */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: white;
    }
  }