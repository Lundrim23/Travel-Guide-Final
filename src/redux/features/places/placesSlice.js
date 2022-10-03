import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlaces = createAsyncThunk("places/getPlaces", async () => {
  const response = await axios.get("http://localhost:5000/api/places/getAllPlacesKosovo");
  return response.data;
});

export const getMontenegro = createAsyncThunk("montenegro/getMontenegro", async () => {
    const response = await axios.get("http://localhost:5000/api/places/getAllPlacesMontenegro");
    return response.data;
  });

export const getMostLikedPlaceAlbania = createAsyncThunk(
  "mostliked/getMostLikedPlaceAlbania",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/places/getAllPlacesAlbania"
    );
    return response.data;
  }
);

export const getMostLikedPlaceMacedonia = createAsyncThunk(
  "mostlikedmacedonia/getMostLikedPlaceMacedonia",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/places/getAllPlacesMacedonia"
    );
    return response.data;
  }
);

export const getMostLikedPlace = createAsyncThunk(
    "mostlikedplace/getMostLikedPlace",
    async () => {
      const response = await axios.get(
        "http://localhost:5000/api/places/getMostLikedPlace"
      );
      return response.data;
    }
  );

const placesSlice = createSlice({
  name: "places",
  initialState: {
    list: [],
    montenegroPlaces: [],
    mostLikedPlace: [],
    placesinAlbania: [],
    placesinMacedonia: [],
    status: null,
  },
  extraReducers: {
    [getPlaces.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPlaces.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getPlaces.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getMostLikedPlace.fulfilled]: (state, { payload }) => {
        state.mostLikedPlace = payload;
        state.status = "success";
      },
    [getMostLikedPlaceAlbania.fulfilled]: (state, { payload }) => {
      state.placesinAlbania = payload;
      state.status = "success";
    },
    [getMostLikedPlaceMacedonia.fulfilled]: (state, { payload }) => {
      state.placesinMacedonia = payload;
      state.status = "success";
    },
    [getMontenegro.fulfilled]: (state, { payload }) => {
        state.montenegroPlaces = payload;
        state.status = "success";
      },
  },
});

export default placesSlice.reducer;
