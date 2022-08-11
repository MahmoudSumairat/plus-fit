import React, { useState } from "react";
import Input from "../core/Input/Input";
import Select from "../core/Select/Select";
import { formFields, getValues, getErrors, validations } from "./formFields";
import styles from "./billingAddress.module.scss";

const { formField, billingAddress, billingAddressForm, billingAddressTitle } =
  styles;

const BillingAddress = ({ onChange = () => {} }) => {
  const [values, setValues] = useState(getValues());
  const [errors, setErrors] = useState(getErrors());

  const handleOnChange = ({ target: { value } }, { name, required }) => {
    const newValues = { ...values };
    newValues[name] = value;
    setValues(newValues);
    onChange(newValues);
    validateInput({ name, value }, null);
  };

  const validateInput = ({ name, value }, field) => {
    const newErrors = { ...errors };
    const inputValidation = validations[name](value, name);
    newErrors[name] = inputValidation;
    setErrors(newErrors);
  };

  return (
    <div className={billingAddress}>
      <h4 className={billingAddressTitle}>Billing Address : </h4>
      <form className={billingAddressForm}>
        {formFields.map((field) => {
          return field.type === "select" ? (
            <Select
              error={errors[field.name].message}
              onChange={(e) => handleOnChange(e, field)}
              className={formField}
              {...field}
              key={field.name}
            />
          ) : (
            <Input
              key={field.name}
              error={errors[field.name].message}
              onChange={(e) => handleOnChange(e, field)}
              className={formField}
              {...field}
            />
          );
        })}
      </form>
    </div>
  );
};

export default BillingAddress;
