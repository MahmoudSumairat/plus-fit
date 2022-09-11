import http from "../../http/http";
import {
  getBrandsRoute,
  getCategoriesRoute,
  getColorsRoute,
  getCountriesRoute,
  getManufacturesRoute,
  getSizesRoute,
  getTypesRoute,
} from "../routes/lookup";

export const getBrandsAPI = () => {
  return http.get(getBrandsRoute());
};

export const getCategoriesAPI = () => {
  return http.get(getCategoriesRoute());
};

export const getColorsAPI = () => {
  return http.get(getColorsRoute());
};

export const getCountriesAPI = () => {
  return http.get(getCountriesRoute());
};

export const getManufacturesAPI = () => {
  return http.get(getManufacturesRoute());
};

export const getTypesAPI = () => {
  return http.get(getTypesRoute());
};

export const getSizesAPI = () => {
  return http.get(getSizesRoute());
};
