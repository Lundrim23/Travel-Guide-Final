import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import authReducer from "../features/loginSlice";
import postReducer from "../features/posts/postsSlice";
import placeReducer from "../features/places/placesSlice";
import userMessagesReducer from "../features/users/userMessageSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer,
    posts: postReducer,
    places: placeReducer,
    userMessages: userMessagesReducer,
  },
});
