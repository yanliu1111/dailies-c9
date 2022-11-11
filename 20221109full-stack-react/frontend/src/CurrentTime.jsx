import React from "react";

const CurrentTime = (currentTime) => {
  const currentTime = [props.currentTime];
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
