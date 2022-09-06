import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEventet = createAsyncThunk(
  "eventet/getEventet",
  async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  }
);

const eventsSlice = createSlice({
  name: "eventet",
  initialState: {
    eventet: [],
    status: null,
  },
  extraReducers: {
    [getEventet.pengind]: (state, action) => {
      state.status = "loading";
    },
    [getEventet.fulfilled]: (state, { payload }) => {
      state.eventet = payload;
      state.eventet = "success";
    },
    [getEventet.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default eventsSlice.reducer;
