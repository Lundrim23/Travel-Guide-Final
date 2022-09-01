import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/userSlice";
import authReducer from "../features/loginSlice"



// verzioni qe spom bon vv
export const store = configureStore({
  reducer:{
    user: userReducer,
    auth: authReducer,
  }
});


//verzioni qe pom bon
// export const store = configureStore({
//   reducer:userReducer,authReducer,
  
// });