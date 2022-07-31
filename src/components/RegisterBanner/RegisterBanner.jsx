import React from "react";
import styles from "./registerBanner.module.scss";
import registerImgSrc from "../../data/register/images/register.jpg";
import { FitLogo } from "../../svg";
const {
  registerBannerContainer,
  registerTitle,
  registerImg,
  registerImgOverlay,
  fitLogo,
} = styles;

const RegisterBanner = () => {
  return (
    <div className={registerBannerContainer}>
      <img className={registerImg} src={registerImgSrc} alt="register" />
      <h1 className={registerTitle}>
        NOW IT’S YOUR CHANCE TO JOIN THE BIGGEST FITNESS COMMUNITY EVER!
      </h1>
      <div className={registerImgOverlay} />
      <FitLogo className={fitLogo} />
    </div>
  );
};

export default RegisterBanner;
