import { configureStore } from '@reduxjs/toolkit';
import countrySlice from 'redux/countrySlice/countrySlice';

const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
});

export default store;
