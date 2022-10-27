import { CountriesPage } from 'pages/Countries/Countries';
import { SingleCountry } from 'pages/SingleCountry/SingleCountry';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CountriesPage />}></Route>
      <Route path=':countryName' element={<SingleCountry />}></Route>
    </Routes>
  )
}