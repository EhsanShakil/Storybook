import React from "react";
import "./button.css";

const Button = (props) => {
  const size = props.size;
  return (
    <div>
      <button
        className={["defaultButton", size].join(" ")}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
