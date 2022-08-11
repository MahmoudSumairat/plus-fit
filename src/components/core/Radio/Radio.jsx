import React from "react";
import styles from "./radio.module.scss";
import { v4 as uuidv4 } from "uuid";

const { radioContainer, radioLabel, radioInput } = styles;

const Radio = ({ label, id = uuidv4(), ...props }) => {
  return (
    <div className={radioContainer}>
      <input className={radioInput} type="radio" id={id} {...props} />
      <label className={radioLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
