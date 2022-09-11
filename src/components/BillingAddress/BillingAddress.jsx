import React, { useState } from "react";
import Input from "../core/Input/Input";
import Select from "../core/Select/Select";
import { formFields, getValues, getErrors, validations } from "./formFields";
import styles from "./billingAddress.module.scss";

const { formField, billingAddress, billingAddressForm, billingAddressTitle } =
  styles;

const BillingAddress = ({ onChange = () => {}, onErrorsChange = () => {} }) => {
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
    const inputValidation = validations[name]
      ? validations[name](value, name)
      : true;
    newErrors[name] = inputValidation;
    setErrors(newErrors);
    const errorsArr = Object.entries(newErrors)
      .map((error) => error[1].valid)
      .filter((isValid) => typeof isValid != "undefined");
    const isAllValid = errorsArr.reduce(
      (prev, current) => prev && current,
      true
    );

    onErrorsChange(isAllValid);
  };

  return (
    <div className={billingAddress}>
      <h4 className={billingAddressTitle}>Billing Address : </h4>
      <form className={billingAddressForm}>
        {formFields.map((field) => {
          return field.type === "select" ? (
            <Select
              error={errors[field.name].message}
              onChange={(e) =>
                handleOnChange(
                  { target: { value: e, name: field.name } },
                  field
                )
              }
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
