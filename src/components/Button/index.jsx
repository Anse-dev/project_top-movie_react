import React, { Component } from "react";
import { WrapperButton } from "./Button.styles";

const Button = ({ text, callback }) => {
  return <WrapperButton onClick={callback}>{text}</WrapperButton>;
};

export default Button;
