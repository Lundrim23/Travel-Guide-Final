import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice";
import postReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    posts: postReducer,
  },
});
