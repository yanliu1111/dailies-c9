import React from "react";

function Adder(props) {
  const setCount = props.setCount;
  return (
    <button onClick={() => setCount(props.count + 1)}>
      Increase the count
    </button>
  );
}

export default Adder;
