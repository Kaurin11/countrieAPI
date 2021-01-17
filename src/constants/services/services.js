import Axios from 'axios';

export const baseRequest = 'https://restcountries.eu/rest/v2';

export const allCountriesUrl =  () => Axios.get(`${baseRequest}/all`);