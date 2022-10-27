import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllCountries } from 'redux/countrySlice/countryActions';
import { selectedCountries } from 'redux/countrySlice/countrySelectors';

export const CountriesPage = () => {
    const countries = useSelector(selectedCountries);
    const dispatch = useDispatch();

    // console.log(countries);

    useEffect(() => {
        dispatch(fetchAllCountries());
    }, [dispatch]);

    return (
        <ul className="countries-list">
            {countries.map(country => (
                <li className="countries-item" key={country.name.common}>
                    <Link to={country.name.common.replace(/\s/g, '_')}>
                        <img
                            loading='lazy'
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
                    </Link>
                </li>
            ))}
        </ul>
    );
}