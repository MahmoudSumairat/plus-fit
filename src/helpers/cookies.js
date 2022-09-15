export const setCookie = (name, value) => {
  return (document.cookie = `${name} = ${value}; expires=session`);
};

export const getCookie = (name) => {
  return document.cookie
    .split(";")
    .find((cookie) => cookie.split("=")[0] === name);
};
