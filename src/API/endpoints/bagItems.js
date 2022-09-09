import http from "../../http/http";
import {
  addBagItemRoute,
  deleteBagItemRoute,
  getBagItemsRoute,
  updateBagItemRoute,
} from "../routes/bagItems";

export const addBagItemAPI = (bagItemData) => {
  return http.post(addBagItemRoute(), bagItemData);
};

export const getBagItemsAPI = () => {
  return http.get(getBagItemsRoute());
};

export const updateBagItemAPI = (bagItemData, bagItemId) => {
  return http.put(updateBagItemRoute(bagItemId), bagItemData);
};

export const deleteBagItemAPI = (bagItemId) => {
  return http.delete(deleteBagItemRoute(bagItemId));
};
