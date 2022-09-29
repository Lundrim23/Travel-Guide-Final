import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const getPosts = createAsyncThunk("posts/getPosts", async () => {
//   return fetch("http://localhost:5000/api/events/get").then((res) =>
//     res.json()
//   );
// });

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get("http://localhost:5000/api/events/get");
  return response.data;
});

export const likePost = createAsyncThunk("like/likePost", async (id) => {
  const like = await axios.put(`http://localhost:5000/api/events/like/${id}`);
  console.log("like", like);
});

export const mostLikedEvents = createAsyncThunk(
  "events/mostLikedEvents",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/events/getfromlikes"
    );
    console.log("most liked events ", response);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    lista: [],
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
    [likePost.fulfilled]: (state, action) => {
      console.log("Saying", action.payload); 
    },
    [mostLikedEvents.fulfilled]: (state, { payload }) => {
      state.lista = payload;
      state.status = "success";
    },
    },
});

export default postsSlice.reducer;
