import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../actions/bag";

const addToBag = () => ({ type: ADD_TO_BAG });

const removeFromBag = () => ({ type: REMOVE_FROM_BAG });

export { addToBag, removeFromBag };
