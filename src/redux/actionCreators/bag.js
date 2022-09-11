import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  RESET_BAG_ITEMS_COUNT,
  SET_BAG_ITEMS_COUNT,
} from "../actions/bag";

const addToBag = () => ({ type: ADD_TO_BAG });

const removeFromBag = () => ({ type: REMOVE_FROM_BAG });

const setBagItemsCount = (payload) => ({ type: SET_BAG_ITEMS_COUNT, payload });

const resetBagItemsCount = () => ({ type: RESET_BAG_ITEMS_COUNT });

export { addToBag, removeFromBag, setBagItemsCount, resetBagItemsCount };
