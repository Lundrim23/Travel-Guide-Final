import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice";
import postReducer from "../features/posts/postsSlice";
import placeReducer from "../features/places/placesSlice";
import countriesReducer from "../features/countries/countriesSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    posts: postReducer,
    places: placeReducer,
    countries: countriesReducer,
  },
});
