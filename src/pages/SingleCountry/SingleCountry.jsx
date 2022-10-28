import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCountryByName } from 'redux/countrySlice/countryActions';
import css from 'pages/SingleCountry/SingleCountry.module.css';

export const SingleCountry = () => {
  const location = useLocation();
  const [countryInfo, setCountryInfo] = useState(null);

  const dispatch = useDispatch();

  const fetchSelectContry = async () => {
    const country = await dispatch(fetchCountryByName(location.pathname));
    setCountryInfo(country.payload[0]);
  };

  useEffect(() => {
    fetchSelectContry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log();
  return (
    <div>
      {countryInfo && (
        <>
          <div className={css.countryItem}>
            <img
              loading="lazy"
              src={countryInfo.flags.svg}
              alt=""
              width="200px"
              className={css.countryFlag}
            />
            <div className={css.description}>
              <h1>{countryInfo.name.common}</h1>
              <p className={css.descHeader}>
                Native name:
                <span className={css.descContent}>{` ${
                  Object.values(countryInfo.name.nativeName)[0].common
                }  `}</span>
              </p>
              <p className={css.descHeader}>
                Population:
                <span className={css.descContent}>
                  {' '}
                  {countryInfo.population.toLocaleString()}
                </span>
              </p>
              <p className={css.descHeader}>
                Region:
                <span className={css.descContent}> {countryInfo.region}</span>
              </p>
              <p className={css.descHeader}>
                Sub Region:
                <span className={css.descContent}>
                  {' '}
                  {countryInfo.subregion}
                </span>
              </p>

              <p className={css.descHeader}>
                Capital:
                <span className={css.descContent}> {countryInfo.capital}</span>
              </p>
              <p className={css.descHeader}>
                Top Level Domain:
                <span className={css.descContent}> {countryInfo.tld}</span>
              </p>
              <p className={css.descHeader}>
                Languages:
                <span className={css.descContent}>
                  {' '}
                  {` ${Object.values(countryInfo.languages)}  `}
                </span>
              </p>
              <p className={css.descHeader}>
                Border Countries:
                <span className={css.descContent}>
                  {countryInfo.borders ? ` ${countryInfo.borders} ` : ' none'}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
