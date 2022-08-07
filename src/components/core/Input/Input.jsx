import React from "react";
import styles from "./input.module.scss";
import { v4 as uuidv4 } from "uuid";
import Animate from "../Animate/Animate";

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
  required,
  multiLine = false,
  ...props
}) => {
  const hasErrorClass = !!error ? inputError : "";

  return (
    <div className={`${inputContainer} ${className} ${hasErrorClass} `}>
      <label htmlFor={id} className={inputLabel}>
        {label}
        {required && "*"}
      </label>
      {multiLine ? (
        <textarea
          rows={10}
          className={`${input} ${inputStyleTypes[styleType]} `}
          id={id}
          {...props}
        ></textarea>
      ) : (
        <input
          className={`${input} ${inputStyleTypes[styleType]} `}
          id={id}
          {...props}
        />
      )}
      <Animate animationType="fadeTopBottom" showsIn={!!error}>
        <span className={inputErrorMsg}>{error}</span>
      </Animate>
    </div>
  );
};

export default Input;
