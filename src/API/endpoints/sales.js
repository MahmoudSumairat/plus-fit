import http from "../../http/http";
import { getProductSalesRoute } from "../routes/sales";

export const getProductSalesAPI = (productId) => {
  return http.get(getProductSalesRoute(productId));
};
