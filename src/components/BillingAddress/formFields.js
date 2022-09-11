import { emailValidation, required } from "../../validations";
import countries from "../../data/lookups/countries";

export const formFields = [
  {
    name: "firstName",
    label: "first name",
    type: "text",
    placeholder: "enter your first name",
    required: true,
  },
  {
    name: "lastName",
    label: "last name",
    type: "text",
    placeholder: "enter your last name",
    required: true,
  },
  {
    name: "email",
    label: "email",
    type: "email",
    placeholder: "enter your email",
    required: true,
  },
  {
    name: "city",
    label: "city",
    type: "text",
    placeholder: "enter your city",
    required: true,
  },
  {
    name: "countryId",
    label: "country",
    type: "select",
    items: countries,
    placeholder: "select country",
    required: true,
  },
  {
    name: "address1",
    label: "address1",
    type: "text",
    placeholder: "enter your address",
    required: true,
  },
  {
    name: "address2",
    label: "address2",
    type: "text",
    placeholder: "optional",
  },
  {
    name: "zipCode",
    label: "ZIP code",
    type: "text",
    placeholder: "enter your zip code",
    required: true,
  },
  {
    name: "mobilePhone",
    label: "mobilePhone",
    type: "text",
    placeholder: "enter your mobile phone",
    required: true,
  },
  {
    name: "additionalMobilePhone",
    label: "additional mobile phone",
    type: "text",
    placeholder: "optional",
  },
];

export const validations = {
  email: emailValidation,
  firstName: required,
  lastName: required,
  city: required,
  countryId: required,
  mobilePhone: required,
  address1: required,
  zipCode: required,
};

export const getValues = () => {
  const values = {};

  formFields.forEach((field) => {
    values[field.name] = "";
  });

  return values;
};

export const getErrors = () => {
  const errors = {};

  formFields.forEach((field) => {
    errors[field.name] = {
      valid: false,
      message: null,
    };
  });

  return errors;
};
