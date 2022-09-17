import axios from "axios";
import { BASE_URL } from "../config/baseURL";
import authInterceptor from "./interceptors/authInterceptor";
import requestError from "./interceptors/requestError";
console.log(BASE_URL);
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  mode: "no-corse",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

http.interceptors.request.use(authInterceptor, requestError);

export default http;
