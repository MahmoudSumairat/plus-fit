import React, { forwardRef } from "react";
import styles from "./button.module.scss";
import { ArrowRight } from "../../../svg";

const {
  commonButton,
  arrowButton,
  borderButtonDark,
  borderButtonLight,
  normalButton,
  buttonIcon,
  buttonPreIcon,
} = styles;

const buttonTypes = {
  borderLight: borderButtonLight,
  borderDark: borderButtonDark,
  normal: normalButton,
};

const Button = forwardRef(
  (
    {
      icon,
      children,
      withArrow,
      buttonType = "normal",
      className = "",
      preIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type="button"
        className={`${commonButton} ${withArrow ? arrowButton : ""} ${
          buttonTypes[buttonType]
        }  ${className} `}
        {...props}
        ref={ref}
      >
        {withArrow && <ArrowRight />}
        {preIcon && <span className={buttonPreIcon}>{preIcon}</span>}
        {children}
        {icon && <span className={buttonIcon}>{icon}</span>}
      </button>
    );
  }
);

export default Button;
