import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCountries } from 'redux/countrySlice/countryActions';
import { selectedCountries } from 'redux/countrySlice/countrySelectors';

export const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectedCountries);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  return (
    <div>
      {countries.map(country => (
        <div key={country.name.common}>{country.flag}</div>
      ))}
    </div>
  );
};
