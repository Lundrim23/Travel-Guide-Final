import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice"

const reducer = combineReducers({
  userReducer,
  authReducer
})


export const store = configureStore({
  reducer
});
