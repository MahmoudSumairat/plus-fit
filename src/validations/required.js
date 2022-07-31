const required = (value, name) => {
  const valid = !!value;
  return { valid, message: !valid ? `${name} is required` : null };
};

export default required;
