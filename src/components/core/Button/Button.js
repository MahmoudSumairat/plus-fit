import React from "react";
import styles from "./button.module.scss";
import { ArrowRight } from "../../../svg";

const {
  commonButton,
  arrowButton,
  borderButtonDark,
  borderButtonLight,
  normalButton,
} = styles;

const buttonTypes = {
  borderLight: borderButtonLight,
  borderDark: borderButtonDark,
  normal: normalButton,
};

const Button = ({
  children,
  withArrow,
  buttonType = "normal",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${commonButton} ${withArrow ? arrowButton : ""} ${
        buttonTypes[buttonType]
      }  ${className} `}
      {...props}
    >
      {children} {withArrow && <ArrowRight />}
    </button>
  );
};

export default Button;
