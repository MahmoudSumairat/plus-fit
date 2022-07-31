const compareValues = (value, name, comparedValue) => {
  const valid = value === comparedValue;

  return { valid, message: !valid ? "passwords don't match" : null };
};

export default compareValues;
