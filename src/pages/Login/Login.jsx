import React from "react";
import styles from "./login.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginBanner from "../../components/LoginBanner/LoginBanner";

const { loginPage } = styles;

const Login = () => {
  return (
    <div className={loginPage}>
      <LoginBanner />
      <LoginForm />
    </div>
  );
};

export default Login;
