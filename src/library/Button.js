import React from "react";

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <button>{props.text}</button>
    </div>
  );
};

export default Button;
