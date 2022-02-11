import { getCountryInfo } from '../fetch-utils.js';
import { renderCountryDetails } from '../render-utils.js';

const countryInfo = document.querySelector('.country-info');


async function fetchCountryInfo() {
    const params = new URLSearchParams(window.location.search);

    const country = await getCountryInfo(params.get('id'));

    const div = renderCountryDetails(country);
    countryInfo.append(div);
}

fetchCountryInfo();