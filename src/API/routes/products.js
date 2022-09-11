import { PRODUCTS } from "../baseURLs";

export const getAllProductsRoute = (pageSize, pageNumber) =>
  `${PRODUCTS}?pageSize=${pageSize}&pageNumber=${pageNumber}`;
export const getProductDetailsRoute = (productId) => `${PRODUCTS}/${productId}`;
export const getProductsByType = (productType, pageSize, pageNumber) =>
  `${PRODUCTS}/types/${productType}?pageSize=${pageSize}&pageNumber=${pageNumber}`;
