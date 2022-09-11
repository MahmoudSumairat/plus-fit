import http from "../../http/http";
import {
  addAddressRoute,
  deleteAddressRoute,
  updateAddressRoute,
} from "../routes/addresses";

export const addAddressAPI = (addressData) => {
  console.log(addressData);
  return http.post(addAddressRoute(), addressData);
};

export const updateAddressAPI = (addressData, addressId) => {
  return http.put(updateAddressRoute(addressId), addressData);
};

export const deleteAddressAPI = (addressId) => {
  return http.delete(deleteAddressRoute(addressId));
};
