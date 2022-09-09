import { ADDRESSES } from "../baseURLs";

export const addAddressRoute = () => `${ADDRESSES}`;
export const updateAddressRoute = (addressId) => `${ADDRESSES}/${addressId}`;
export const deleteAddressRoute = (addressId) => `${ADDRESSES}/${addressId}`;
