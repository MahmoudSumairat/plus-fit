const passwordValidation = (value) => {
  if (!value) {
    return { valid: false, message: "password is required" };
  }
  const valid = value.length >= 8;
  return {
    valid,
    message: !valid
      ? "Password must be more than or equal to 8 characters"
      : null,
  };
};

export default passwordValidation;
