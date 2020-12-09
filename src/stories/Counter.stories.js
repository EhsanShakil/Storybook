import Counter from "../components/Counter";
import React from "react";

export default {
  title: "Counter",
  component: Counter,
};

export const CounterDefault = () => {
  return <Counter />;
};

export const CounterValue = () => {
  return <Counter initialValue={34} />;
};
