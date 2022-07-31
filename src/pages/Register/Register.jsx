import React from "react";
import RegisterBanner from "../../components/RegisterBanner/RegisterBanner";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./register.module.scss";

const { registerPage } = styles;

const Register = () => {
  return (
    <div className={registerPage}>
      <RegisterBanner />
      <RegisterForm />
    </div>
  );
};

export default Register;
