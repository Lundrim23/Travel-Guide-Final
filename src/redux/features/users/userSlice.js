import { createSlice } from "@reduxjs/toolkit";
import getUsers from "./load.users";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    amount: 0,
  },
  reducers: {
    loadUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.amount = state.users.length;
    },
    updateUserSuccess: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
    },
    deleteUserSuccess: (state, action) => {
      state.users = state.users.filter(({ id }) => id !== action.payload.id);
      state.amount = state.users.length;
    },
  },
});

export default userSlice.reducer;

const { loadUsersSuccess, updateUserSuccess, deleteUserSuccess } =
  userSlice.actions;

export const loadUsers = () => (dispatch) => {
  // try {
  //   await api
  //     .get("/users")
  //     .then((response) => dispatch(loadUsersSuccess(response.data)));
  // } catch (e) {
  //   return console.error(e.message);
  // }

  dispatch(loadUsersSuccess(getUsers));
};

export const updateUser = (user) => (dispatch) => {
  dispatch(updateUserSuccess(user));
};

///deletes user by id
export const deleteUser = (id) => (dispatch) => {
  // api call delete request
  dispatch(deleteUserSuccess(id));
};
