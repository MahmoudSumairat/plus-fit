import React, { useState } from "react";
import Button from "../core/Button/Button";
import Input from "../core/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registerForm.module.scss";
import { useDispatch } from "react-redux";
import { formFields, getErrors, getValues, validations } from "./formFields";
import { registerAPI } from "../../API/endpoints/auth";
import { login as loginAction } from "../../redux/actionCreators/auth";
import getFormValid from "../../helpers/getFormValid";
import authStyles from "../../styles/auth.module.scss";

const {
  registerFormContainer,
  registerForm,
  registerFields,
  registerDescription,
  registerButton,
  registerLink,
} = styles;

const {
  authForm,
  authFields,
  authInput,
  authDescription,
  authButton,
  authLink,
} = authStyles;

const RegisterForm = () => {
  const [values, setValues] = useState(getValues());
  const [errors, setErrors] = useState(getErrors());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = ({ target }, field) => {
    const { name, value } = target;
    const newValues = { ...values };
    newValues[name] = value;
    setValues(newValues);
    validateInput(target, field);
  };

  const validateInput = ({ name, value }, field) => {
    const newErrors = { ...errors };
    const inputValidation = validations[name](
      value,
      name,
      values[field.compareWith]
    );
    newErrors[name] = inputValidation;
    setErrors(newErrors);
  };

  const onSubmit = async () => {
    // registerAPI(values).then(() => {
    //   localStorage.setItem("authToken", "authToken");
    //   dispatch(loginAction("authToken"));
    //   navigate("/", { replace: true });
    // });

    try {
      const {
        data: { data },
      } = await registerAPI(values);
      localStorage.setItem("authToken", data);
      dispatch(loginAction(data));
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={registerFormContainer}>
      <form className={`${registerForm} ${authForm} `}>
        <div className={`${registerFields} ${authFields}`}>
          <p className={`${authDescription} ${registerDescription}`}>
            ENTER YOUR INFORMATION
          </p>

          {formFields.map((field) => {
            return (
              <Input
                key={field.name}
                className={authInput}
                onChange={(e) => handleInputChange(e, field)}
                error={errors[field.name].message}
                {...field}
              />
            );
          })}
          <Button
            buttonType="borderDark"
            label="first name"
            className={`${authButton} ${registerButton} `}
            onClick={onSubmit}
            disabled={!getFormValid(errors)}
          >
            sign up
          </Button>

          <Link className={`${authLink} ${registerLink} `} to="/login">
            i already have an account
          </Link>
          <Link className={`${authLink} ${registerLink} `} to="/">
            Continue as a guest
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
