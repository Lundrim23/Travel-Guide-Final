import { createSlice } from "@reduxjs/toolkit";
import * as UserService from "../../../utils/services/users.service";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

const { loginUserSuccess } = userSlice.actions;

export const loginUser = (user) => async (dispatch) => {
  await UserService.login({
    email: user.email,
    password: user.password,
  })
    .then((res) => {
      dispatch(
        loginUserSuccess({
          _id: res.data.user._id,
          username: res.data.user.username,
          email: res.data.user.email,
          isAdmin: res.data.user.isAdmin,
          phone: res.data.user.phone,
        })
      );
    })
    .catch((err) => {});
};
