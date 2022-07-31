import React, { useState } from "react";
import Button from "../core/Button/Button";
import Input from "../core/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./registerForm.module.scss";
import { useDispatch } from "react-redux";
import { formFields, getErrors, getValues, validations } from "./formFields";
import { register } from "../../API/endpoints/auth";
import { login as loginAction } from "../../redux/actionCreators/auth";
import getFormValid from "../../helpers/getFormValid";

const {
  registerFormContainer,
  registerForm,
  registerFields,
  registerDescription,
  registerInput,
  registerButton,
  registerLink,
} = styles;

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

  const onSubmit = () => {
    register(values).then(() => {
      localStorage.setItem("authToken", "authToken");
      dispatch(loginAction("authToken"));
      navigate("/", { replace: true });
    });
  };

  return (
    <div className={registerFormContainer}>
      <form className={registerForm}>
        <div className={registerFields}>
          <p className={registerDescription}>ENTER YOUR INFORMATION</p>

          {formFields.map((field) => {
            return (
              <Input
                className={registerInput}
                onChange={(e) => handleInputChange(e, field)}
                error={errors[field.name].message}
                {...field}
              />
            );
          })}
          <Button
            buttonType="borderDark"
            label="first name"
            className={registerButton}
            onClick={onSubmit}
            disabled={!getFormValid(errors)}
          >
            sign up
          </Button>

          <Link className={registerLink} to="/login">
            i already have an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
