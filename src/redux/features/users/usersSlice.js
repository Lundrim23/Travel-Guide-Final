import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getUsers from "./load.users";

export const countNewUsers = createAsyncThunk(
  "countusers/countNewUsers",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/users/countUsers"
    );
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    allUser: [],
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
    messageReceivedSuccess: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.room) {
          user.messaged = true;
        }
        return user;
      });
    },
  },
  extraReducers: {
    [countNewUsers.fulfilled]: (state, { payload }) => {
      state.allUser = payload;
      state.status = 'success';
    }
  }
});

export default usersSlice.reducer;

const {
  loadUsersSuccess,
  updateUserSuccess,
  deleteUserSuccess,
  messageReceivedSuccess,
} = usersSlice.actions;

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

export const messageReceived = (message) => (dispatch) => {
  dispatch(messageReceivedSuccess(message.message));
};
