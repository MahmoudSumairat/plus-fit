import React from "react";
import styles from "./button.module.scss";
import { ArrowRight } from "../../../svg";

const { commonButton, arrowButton, borderButton, normalButton } = styles;

const buttonTypes = {
  border: borderButton,
  normal: normalButton,
};

const Button = ({
  children,
  withArrow,
  buttonType = "normal",
  className = "",
}) => {
  return (
    <button
      className={`${commonButton} ${withArrow ? arrowButton : ""} ${
        buttonTypes[buttonType]
      }  ${className} `}
    >
      {children} {withArrow && <ArrowRight />}
    </button>
  );
};

export default Button;
