import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountriesIn30Days = createAsyncThunk(
  "countCountries/getCountriesIn30Days",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/api/countries/countcountry"
    );
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getCountriesIn30Days.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCountriesIn30Days.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getCountriesIn30Days.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default countriesSlice.reducer;
