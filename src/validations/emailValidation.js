const emailValidation = (value) => {
  if (!value) {
    return { valid: false, message: "Email is required" };
  }
  const valid = value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return {
    valid,
    message: !valid ? "Your entered an invalid email, please try again" : null,
  };
};

export default emailValidation;
