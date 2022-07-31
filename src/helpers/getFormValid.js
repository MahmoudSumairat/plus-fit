const getFormValid = (errors) => {
  const errorsArr = Object.entries(errors).map((error) => error.valid);
  const initialValue = true;
  const isValid = errorsArr.reduce(
    (previousValue, currentValue) => previousValue && currentValue,
    initialValue
  );

  return isValid;
};

export default getFormValid;
