import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { fetchCountryByName } from 'redux/countrySlice/countryActions';

export const SingleCountry = () => {
    const location = useLocation();
    const [countryInfo, setCountryInfo] = useState(null);

    const dispatch = useDispatch();

    const fetchSelectContry = async () => {
        const country = await dispatch(fetchCountryByName(location.pathname));
        setCountryInfo(country.payload[0]);
    }

    useEffect(() => {
        fetchSelectContry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {countryInfo && <h2>{countryInfo.name.common}</h2> }
        </div>
    );
}