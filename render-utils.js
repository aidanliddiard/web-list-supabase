export function renderCountries(object){
    const div = document.createElement('div');
    div.classList.add('country');
    const img = document.createElement('img');
    img.src = object.img;
    const h3 = document.createElement('h3');
    h3.textContent = `${object.name} Facts`;
    div.append(img, h3);
    return div;
}


export function renderCountryDetails(object) {
    const div = document.createElement('div');
    div.classList.add('countries');
    const img = document.createElement('img');
    img.src = object.img;
    const h3 = document.createElement('h3');
    h3.textContent = `${object.name} Facts`;
    const ul = document.createElement('ul');
    const liPopulation = document.createElement('li');
    liPopulation.textContent = `Population: ${object.population}`;
    const liCapital = document.createElement('li');
    liCapital.textContent = `Capital: ${object.capital}`;
    const liFact = document.createElement('li');
    liFact.textContent = `Fun Fact: ${object.fact}`;
    ul.append(liPopulation, liCapital, liFact);
    div.append(img, h3, ul);
    return div;
}