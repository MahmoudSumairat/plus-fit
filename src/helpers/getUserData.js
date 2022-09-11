const getUserData = () => {
  try {
    const userData = localStorage.getItem("userData");
    return JSON.parse(userData);
  } catch (err) {
    return {};
  }
};

export default getUserData;
