import { BAG_ITEMS } from "../baseURLs";

export const addBagItemRoute = () => `${BAG_ITEMS}`;
export const getBagItemsRoute = () => `${BAG_ITEMS}`;
export const updateBagItemRoute = (bagItemId) => `${BAG_ITEMS}/${bagItemId}`;
export const deleteBagItemRoute = (bagItemId) => `${BAG_ITEMS}/${bagItemId}`;
