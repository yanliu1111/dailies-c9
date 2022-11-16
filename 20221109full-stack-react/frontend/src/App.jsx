// import logo from "./logo.svg";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CurrentTime from "./CurrentTime";
import CurrentWeather from "./CurrentWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState();

  const getCurrentWeather = async () => {
    try {
      let response = await fetch("/weather");
      let vals = await response.json();
      console.log(vals);
      return setCurrentWeather(vals);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      getCurrentWeather();
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const clearCurrentWeather = () => setCurrentWeather(null);
  return (
    <div className="App">
      {/* The current time is{" "} */}
      {/* The current time is:&nbsp;
      {
        (new Date(currentTime).toLocaleTimeString("en-US"),
        { houre: 2 - digit },
        { minute: 2 - digit },
        { second: 2 - digit })
      } */}
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      <button onClick={getCurrentWeather}> Get Current Weather </button>
      <button onClick={clearCurrentWeather}>Clear Current Weather</button>
    </div>
  );
}

export default App;
