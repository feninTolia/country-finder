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
    <ul className="countries-list">
      {countries.map(country => (
        <li key={country.name.common} className="countries-item">
          <img
            src={country.flags.svg}
            alt=""
            width="200px"
            className="country-flag"
          />
          <div className="description">
            <h3>{country.name.common}</h3>
            <p>
              Population: <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
