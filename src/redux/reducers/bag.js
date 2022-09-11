import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  RESET_BAG_ITEMS_COUNT,
  SET_BAG_ITEMS_COUNT,
} from "../actions/bag";

const initialState = {
  bagItemsCount: 0,
};

const bagReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_BAG:
      return {
        ...state,
        bagItemsCount: state.bagItemsCount + 1,
      };

    case REMOVE_FROM_BAG:
      return {
        ...state,
        bagItemsCount: state.bagItemsCount - 1,
      };

    case SET_BAG_ITEMS_COUNT:
      return {
        ...state,
        bagItemsCount: payload,
      };
    case RESET_BAG_ITEMS_COUNT: {
      return {
        ...state,
        bagItemsCount: 0,
      };
    }
    default:
      return state;
  }
};

export default bagReducer;
