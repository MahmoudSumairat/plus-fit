import { LOGIN, LOGOUT } from "../actions/auth";
import getAuthToken from "../../helpers/getAuthToken";
import getUserData from "../../helpers/getUserData";

const initialState = {
  isAuthenticated: !!getAuthToken(),
  authToken: getAuthToken(),
  userData: getUserData(),
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        isAuthenticated: true,
        authToken: payload.token,
        userData: payload.userData,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        authToken: null,
      };
    default:
      return state;
  }
};

export default authReducer;
