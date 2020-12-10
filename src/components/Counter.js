import React, { useState } from "react";
import Button from "./Button";

const Counter = (props) => {
  let [value, setValue] = useState(props.initialValue);
  return (
    <>
      <div style={{ backgroundColor: props.background }}>
        <h1>Counter {props.initialValue}</h1>
        <h1>Value {value}</h1>
      </div>
      <Button title="Increment" onClick={() => setValue(++value)} />
      <Button title="Decrement" onClick={() => setValue(--value)} />
    </>
  );
};

export default Counter;
