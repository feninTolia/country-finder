import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCountries } from 'redux/countrySlice/countryActions';

const initialState = {
    isLoading: false,
    isError: false,
    countries: [],
};

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    extraReducers: {
        [fetchAllCountries.fulfilled]: (state, action) => {
        state.countries = action.payload;
        },
    },
});

export const { addAllCountries } = countrySlice.actions;

export default countrySlice.reducer;
