import React from "react";

const Counter = (props) => {
  return (
    <div style={{ backgroundColor: props.background }}>
      <h1>Counter {props.initialValue}</h1>
    </div>
  );
};

export default Counter;
