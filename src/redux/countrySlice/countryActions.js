import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCountries = createAsyncThunk(
  'countries/fetchAll',

  async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    return await response.json();
  }
);

export const fetchCountryByName = createAsyncThunk(
  'countries/fetchByName',

  async (countryName) => {
    // eslint-disable-next-line no-useless-escape
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName.replace(/\_/g, ' ')}`);
    return await response.json();
  }
);