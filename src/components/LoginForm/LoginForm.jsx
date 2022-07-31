import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../core/Button/Button";
import Input from "../core/Input/Input";
import styles from "./loginForm.module.scss";
import { login } from "../../API/endpoints/auth";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../redux/actionCreators/auth";
import { emailValidation, passwordValidation } from "../../validations";

const {
  loginDescription,
  loginEmail,
  loginPassword,
  loginFields,
  loginButton,
  loginLink,
  loginFormWrapper,
  loginForm,
} = styles;

const validations = {
  email: emailValidation,
  password: passwordValidation,
};

const LoginForm = () => {
  const [values, setValues] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    password: { message: null, valid: false },
    email: { message: null, valid: false },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const newValues = { ...values };
    newValues[name] = value;
    setValues(newValues);
    validateInput(target);
  };

  const validateInput = ({ name, value }) => {
    console.log("name", name);
    const newErrors = { ...errors };
    const inputValidation = validations[name](value);
    newErrors[name] = inputValidation;
    setErrors(newErrors);
  };

  const onSubmit = () => {
    login(values).then(() => {
      localStorage.setItem("authToken", "authToken");
      dispatch(loginAction("authToken"));
      navigate("/", { replace: true });
    });
  };

  return (
    <div className={loginFormWrapper}>
      <form className={loginForm}>
        <div className={loginFields}>
          <p className={loginDescription}>login using email and password</p>

          <Input
            className={loginEmail}
            label="email*"
            placeholder="enter your email address"
            onChange={handleInputChange}
            error={errors.email.message}
            name="email"
          />
          <Input
            className={loginPassword}
            label="password*"
            placeholder="enter your password"
            onChange={handleInputChange}
            error={errors.password.message}
            name="password"
            type="password"
          />

          <Button
            onClick={onSubmit}
            className={loginButton}
            buttonType="borderDark"
            type="button"
          >
            login
          </Button>

          <Link className={loginLink} to="/register">
            i don't have an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
