import React from "react";
import styles from "./loginBanner.module.scss";
import loginImgSrc from "../../data/login/images/login.jpg";
import { FitLogo } from "../../svg";

const { loginImg, loginOverlay, loginTitle, fitLogo, loginInfoContainer } =
  styles;

const LoginBanner = () => {
  return (
    <div className={loginInfoContainer}>
      <div className={loginOverlay} />
      <img className={loginImg} src={loginImgSrc} alt="login" />
      <h1 className={loginTitle}>
        WELCOME BACK, <br /> WE’VE GOT A WHOLE NEW MAGIC FOR YOU TO EXPLORE!
      </h1>
      <FitLogo className={fitLogo} />
    </div>
  );
};

export default LoginBanner;
