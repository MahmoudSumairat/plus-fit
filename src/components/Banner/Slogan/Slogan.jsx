import React from "react";
import styles from "./slogan.module.scss";

const { slogan, first, last } = styles;

const Slogan = () => {
  return (
    <h1 className={slogan}>
      <span className={first}>the way you do it</span>
      <span className={last}>the way you wear it</span>
    </h1>
  );
};

export default Slogan;
