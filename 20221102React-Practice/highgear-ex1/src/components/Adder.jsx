import React from "react";

function Adder(props) {
  const setCount = props.setCount;
  function increaseCount() {
    setCount((oldValue) => {
      return oldValue + 1;
    });
  }
  return (
    <button className="yellow-button" onClick={increaseCount}>
      Increase the count
    </button>
  );
}

export default Adder;
