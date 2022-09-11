import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../core/Button/Button";
import Input from "../core/Input/Input";
import styles from "./loginForm.module.scss";
import { loginAPI } from "../../API/endpoints/auth";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../../redux/actionCreators/auth";
import { emailValidation, passwordValidation } from "../../validations";
import getFormValid from "../../helpers/getFormValid";
import authStyles from "../../styles/auth.module.scss";

const { loginFormWrapper, loginForm } = styles;

const {
  authForm,
  authFields,
  authInput,
  authDescription,
  authButton,
  authLink,
} = authStyles;

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
    const newErrors = { ...errors };
    const inputValidation = validations[name](value);
    newErrors[name] = inputValidation;
    setErrors(newErrors);
  };

  const onSubmit = async () => {
    try {
      const {
        data: {
          data: { token, userData },
        },
      } = await loginAPI(values);
      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(loginAction({ token, userData }));
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={loginFormWrapper}>
      <form className={`${authForm} ${loginForm}`}>
        <div className={authFields}>
          <p className={authDescription}>login using email and password</p>

          <Input
            className={authInput}
            label="email*"
            placeholder="enter your email address"
            onChange={handleInputChange}
            error={errors.email.message}
            name="email"
          />
          <Input
            className={authInput}
            label="password*"
            placeholder="enter your password"
            onChange={handleInputChange}
            error={errors.password.message}
            name="password"
            type="password"
          />

          <Button
            onClick={onSubmit}
            className={authButton}
            buttonType="borderDark"
            type="button"
            disabled={!getFormValid(errors)}
          >
            login
          </Button>

          <Link className={authLink} to="/register">
            i don't have an account
          </Link>

          <Link className={authLink} to="/">
            Continue as a guest
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
