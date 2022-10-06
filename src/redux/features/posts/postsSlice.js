import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await axios.get(
    "http://localhost:5000/api/events/sorybyfestival"
  );
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
    return response.data;
  }
);

export const ArtandMovie = createAsyncThunk(
  "artandmovie/ArtandMovie ",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/events/sorybyartandmovie"
    );
    return response.data;
  }
);

export const FoodndCulture = createAsyncThunk(
  "foodncult/FoodnCulture",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/events/sorybyfoodandculture"
    );
    return response.data;
  }
);

export const beachEvent = createAsyncThunk(
  "beachevent/beachEvent",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/events/sorybybeachevent"
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    lista: [],
    artandmovie: [],
    foodculture: [],
    beachevents: [],
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
    [ArtandMovie.fulfilled]: (state, { payload }) => {
      state.artandmovie = payload;
      state.status = "success";
    },
    [FoodndCulture.fulfilled]: (state, { payload }) => {
      state.foodculture = payload;
      state.status = "success";
    },
    [beachEvent.fulfilled]: (state, { payload }) => {
      state.beachevents = payload;
      state.status = "success";
    },
  },
});

export default postsSlice.reducer;
