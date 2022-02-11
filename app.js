import { getCountries, getCountryInfo } from './fetch-utils.js';
import { renderCountries } from './render-utils.js';

const countryList = document.querySelector('.countries-container');
const countryInfo = document.querySelector('.country-info');


async function fetchCountries() {
    const countries = await getCountries();

    for (let country of countries) {
        const li = renderCountries(country);
        countryList.append(li);
    }
}

fetchCountries();