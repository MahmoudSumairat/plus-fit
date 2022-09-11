import http from "../../http/http";
import { loginRoute, registerRoute } from "../routes/auth";

export const loginAPI = (credentials) => {
  return http.post(loginRoute(), credentials);
};

export const registerAPI = (credentials) => {
  return http.post(registerRoute(), credentials);
};
