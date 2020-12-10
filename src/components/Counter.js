import React from "react";
import Button from "./Button";

const Counter = (props) => {
  return (
    <>
      <div style={{ backgroundColor: props.background }}>
        <h1>Counter {props.initialValue}</h1>
      </div>
      <Button title="Increment" />
      <Button title="Decrement" />
    </>
  );
};

export default Counter;
