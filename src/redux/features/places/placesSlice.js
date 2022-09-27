import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlaces = createAsyncThunk('places/getPlaces', async () => {
    const response = await axios.get('http://localhost:5000/api/places/get');
    return response.data;
})

const placesSlice = createSlice({
    name: 'places',
    initialState:{
        list: [],
        status: null,
    },
    extraReducers: {
        [getPlaces.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getPlaces.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.status = 'success';
        },
        [getPlaces.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default placesSlice.reducer;