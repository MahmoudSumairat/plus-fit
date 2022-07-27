import React from "react";
import { FLogo, PlusFitLogo } from "../../svg";
import styles from "./logo.module.scss";

const { logo, miniLogo } = styles;

const Logo = ({ mini }) => {
  return (
    <div className={mini ? miniLogo : logo}>
      {mini ? <FLogo /> : <PlusFitLogo />}
    </div>
  );
};

export default Logo;
