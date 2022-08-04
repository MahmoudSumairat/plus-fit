const getFormValid = (errors) => {
  const errorsArr = Object.entries(errors).map((error) => error[1].valid);
  const initialValue = true;
  console.log(errorsArr);
  const isValid = errorsArr.reduce(
    (previousValue, currentValue) => previousValue && currentValue,
    initialValue
  );

  return isValid;
};

export default getFormValid;
