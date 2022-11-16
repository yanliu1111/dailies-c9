import React, { useEffect } from "react";

const CurrentWeather = ({ currentWeather }) => {
  // const currentTime = [props.currentTime];
  useEffect(() => {
    console.log("only first render");
    return () => {
      console.log("unmounting");
    };
    // const id = setInterval(() => {
    //   console.log("every 5 seconds");
    // }, 5000);
    // return () => clearInterval(id);
  }, []);

  // useEffect(() => {
  //   console.log("currentWeather has changed value");
  // }, [currentWeather]); //if currentTime changes, will do callback func

  //   useEffect(() => {
  //     console.log("every render");
  //   });

  return (
    <div>
      The current weather is: <p>conditions: {currentWeather.conditions}</p>
      <p>temperature: {currentWeather.temperature}</p>
    </div>
  );
};

export default CurrentWeather;
