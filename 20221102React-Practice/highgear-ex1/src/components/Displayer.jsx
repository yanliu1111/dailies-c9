import React from "react";

function Displayer(props) {
  const count = props.count;
  return <p>Second count: {count}</p>;
}

export default Displayer;
