import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice";

export const store = configureStore({
  reducer:{
    user: userReducer,
    auth: authReducer,
  }
});

