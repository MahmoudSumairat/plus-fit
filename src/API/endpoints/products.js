import http from "../../http/http";
import {
  getAllProductsRoute,
  getProductDetailsRoute,
  getProductsByType,
} from "../routes/products";

export const getAllProductsAPI = (pageSize, pageNumber) => {
  return http.get(getAllProductsRoute(pageSize, pageNumber));
};

export const getProductDetailsAPI = (productId) => {
  return http.get(getProductDetailsRoute(productId));
};

export const getProductsByTypeAPI = (productType) => {
  return http.get(getProductsByType(productType));
};
