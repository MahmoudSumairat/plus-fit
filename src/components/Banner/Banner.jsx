import React from "react";
import styles from "./banner.module.scss";
import Slogan from "./Slogan/Slogan";

const { banner } = styles;

const Banner = () => {
  return (
    <div className={banner}>
      <Slogan />
    </div>
  );
};

export default Banner;
