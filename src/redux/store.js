import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redurcers/auth";

const store = configureStore({auth : authReducer});

export default store;