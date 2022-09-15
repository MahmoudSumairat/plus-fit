import http from "../../http/http";
import { createOrderRoute } from "../routes/orders";

export const createOrderAPI = (orderData) => {
  return http.post(createOrderRoute(), orderData);
};
