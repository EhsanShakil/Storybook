import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const ButtonDefault = () => {
  return <Button title="Default" />;
};
export const ButtonSizeSmall = () => {
  return <Button title="Default" size="small" />;
};
export const ButtonSizeLarge = () => {
  return <Button title="Default" size="large" />;
};
