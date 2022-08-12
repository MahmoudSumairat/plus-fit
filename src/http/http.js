import axios from "axios";
import { BASE_URL } from "../config/baseURL";
import authInterceptor from "./interceptors/authInterceptor";
import requestError from "./interceptors/requestError";

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(authInterceptor, requestError);

export default http;
