import React from "react";
import Counter from "../components/Counter";

export default {
  title: "Counter",
  component: Counter,
};

export const CounterDefault = () => {
  return <Counter initialValue={0} />;
};
export const CounterValue = () => {
  return <Counter initialValue={34} />;
};
export const CounterBackground = () => {
  return <Counter initialValue={50} background="yellow" />;
};
