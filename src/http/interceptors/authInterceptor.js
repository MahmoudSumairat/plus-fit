const authInterceptor = (request) => {
  const token = localStorage.getItem("authToken");
  request.headers["Authorization"] = `Bearer ${token}`;
  return request;
};

export default authInterceptor;
