import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice";
import postReducer from "../features/posts/postsSlice";
import userMessagesReducer from "../features/users/userMessageSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    posts: postReducer,
    userMessages: userMessagesReducer,
  },
});
