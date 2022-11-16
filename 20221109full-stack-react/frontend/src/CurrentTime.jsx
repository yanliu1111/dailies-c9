import React, { useEffect } from "react";

const CurrentTime = ({ currentTime }) => {
  // const currentTime = [props.currentTime];
  useEffect(() => {
    console.log("only first render");
    // const id = setInterval(() => {
    //   console.log("every 5 seconds");
    // }, 5000);
    // return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log("currentTime has changed value");
  }, [currentTime]); //if currentTime changes, will do callback func

  useEffect(() => {
    console.log("every render");
  });

  return (
    <div>
      The current time is:{" "}
      {new Date(currentTime).toLocaleDateString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })}
    </div>
  );
};

export default CurrentTime;
