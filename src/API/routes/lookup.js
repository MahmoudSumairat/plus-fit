import {
  BRANDS,
  CATEGORIES,
  COLORS,
  COUNTRIES,
  LOOKUPS,
  MANUFACTURES,
  TYPES,
} from "../baseURLs";

export const getBrandsRoute = () => `${LOOKUPS}/${BRANDS}`;
export const getCategoriesRoute = () => `${LOOKUPS}/${CATEGORIES}`;
export const getColorsRoute = () => `${LOOKUPS}/${COLORS}`;
export const getCountriesRoute = () => `${LOOKUPS}/${COUNTRIES}`;
export const getManufacturesRoute = () => `${LOOKUPS}/${MANUFACTURES}`;
export const getTypesRoute = () => `${LOOKUPS}/${TYPES}`;
