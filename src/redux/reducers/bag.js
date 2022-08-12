import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../actions/bag";

const initialState = {
  bagItemsCount: 0,
};

const bagReducer = (state = initialState, { type }) => {
  switch (type) {
    case ADD_TO_BAG:
      return {
        ...state,
        bagItemsCount: state.bagItemsCount + 1,
      };

    case REMOVE_FROM_BAG:
      return {
        ...state,
        bagItemsCount: state.bagItemsCount + 1,
      };
    default:
      return state;
  }
};

export default bagReducer;
