// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderCountryDetails } from '../render-utils.js';

const test = QUnit.test;

test('time to test renderCountryDetails function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="countries"><img src="/assets/icons8-australia-96.png"><h3>Australia Facts</h3><ul><li>Population: 25.69 million</li><li>Capital: Canberra</li><li>Fun Fact: If you were to visit one new beach in Australia every day, it would take more than 27 years to see them all.</li></ul></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCountryDetails ();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
