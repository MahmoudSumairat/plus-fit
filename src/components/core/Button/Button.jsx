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
  loading,
  loadingContainer,
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
      isLoading,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type="button"
        className={`${commonButton} ${isLoading ? loadingContainer : ""} ${
          withArrow ? arrowButton : ""
        } ${buttonTypes[buttonType]}  ${className} `}
        {...props}
        ref={ref}
      >
        {!isLoading ? (
          <>
            {withArrow && <ArrowRight />}
            {preIcon && <span className={buttonPreIcon}>{preIcon}</span>}
            {children}
            {icon && <span className={buttonIcon}>{icon}</span>}
          </>
        ) : (
          <span className={loading}></span>
        )}
      </button>
    );
  }
);

export default Button;
