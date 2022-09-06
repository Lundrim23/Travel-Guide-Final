import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice";
import eventsReducer from "../features/users/eventsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    eventet: eventsReducer,
  },
});
