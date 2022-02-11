// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderCountries, renderCountryDetails } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderCountries function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<a href="./other-page/?id=1"><div class="country"><img src="/assets/icons8-australia-96.png"><h3>Australia Facts</h3></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCountries ({
        id: '1',
        name: 'Australia',
        img: '/assets/icons8-australia-96.png',
        population: '25.69 million',
        capital: 'Canberra',
        fact: 'If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('time to test renderCountryDetails function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = '<div class="countries"><img src="/assets/icons8-australia-96.png"><h3>Australia Facts</h3><ul><li>Population: 25.69 million</li><li>Capital: Canberra</li><li>Fun Fact: If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.</li></ul> <iframe src="https://www.google.com/maps/embed?pb=!4v1644602448305!6m8!1m7!1sTNE1NPAnEUNYhGk9kFWyJw!2m2!1d-23.30339107314864!2d151.9149548463482!3f287.37!4f-18.959999999999994!5f0.7820865974627469" </iframe></div>';
    const expected = '<div class="countries"><img src="/assets/icons8-australia-96.png"><h3>Australia Facts</h3><ul><li>Population: 25.69 million</li><li>Capital: Canberra</li><li>Fun Fact: If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.</li></ul><iframe src="https://www.google.com/maps/embed?pb=!4v1644602448305!6m8!1m7!1sTNE1NPAnEUNYhGk9kFWyJw!2m2!1d-23.30339107314864!2d151.9149548463482!3f287.37!4f-18.959999999999994!5f0.7820865974627469"></iframe></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCountryDetails ({
        name: 'Australia',
        img: '/assets/icons8-australia-96.png',
        population: '25.69 million',
        capital: 'Canberra',
        fact: 'If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.',
        view: 'https://www.google.com/maps/embed?pb=!4v1644602448305!6m8!1m7!1sTNE1NPAnEUNYhGk9kFWyJw!2m2!1d-23.30339107314864!2d151.9149548463482!3f287.37!4f-18.959999999999994!5f0.7820865974627469',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


