import React from "react";
import styles from "./input.module.scss";
import { v4 as uuidv4 } from "uuid";

const {
  inputContainer,
  inputLabel,
  input,
  standardInput,
  modifiedInput,
  inputError,
  inputErrorMsg,
} = styles;

const inputStyleTypes = {
  standard: standardInput,
  modified: modifiedInput,
};

const Input = ({
  label,
  id = uuidv4(),
  className = "",
  styleType = "standard",
  error = "",
  ...props
}) => {
  const hasErrorClass = !!error ? inputError : "";

  return (
    <div className={`${inputContainer} ${className} ${hasErrorClass} `}>
      <label htmlFor={id} className={inputLabel}>
        {label}
      </label>
      <input
        className={`${input} ${inputStyleTypes[styleType]} `}
        id={id}
        {...props}
      />
      {!!error && <span className={inputErrorMsg}>{error}</span>}
    </div>
  );
};

export default Input;
