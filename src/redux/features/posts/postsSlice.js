import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    return fetch("http://localhost:5000/api/events/get").then((res) =>
      res.json()
    );
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default postsSlice.reducer;
