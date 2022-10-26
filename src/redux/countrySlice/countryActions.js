import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAll',

  async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    return await response.json();
  }
);
