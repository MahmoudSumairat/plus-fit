import {
  compareValues,
  emailValidation,
  passwordValidation,
  required,
} from "../../validations";

const formFields = [
  {
    name: "firstName",
    label: "first name",
    required: true,
    placeholder: "enter your first name",
  },
  {
    name: "lastName",
    label: "last name",
    required: true,
    placeholder: "enter your last name",
  },
  {
    name: "email",
    label: "email",
    required: true,
    placeholder: "enter your email",
    type: "email",
  },
  {
    name: "password",
    label: "password",
    required: true,
    placeholder: "enter your password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "confirmPassword",
    required: true,
    placeholder: "enter your password again",
    compareWith: "password",
    type: "password",
  },
];

const validations = {
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: compareValues,
  firstName: required,
  lastName: required,
};

const getValues = () => {
  const values = {};

  formFields.forEach((field) => {
    values[field.name] = "";
  });

  return values;
};

const getErrors = () => {
  const errors = {};

  formFields.forEach((field) => {
    errors[field.name] = {
      valid: false,
      message: null,
    };
  });

  return errors;
};

export { formFields, validations, getErrors, getValues };
