export function renderCountries(object){
    const div = document.createElement('div');
    div.classList.add('country');
    const img = document.createElement('img');
    img.src = object.img;
    const h3 = document.createElement('h3');
    h3.textContent = `${object.name} Facts`;

    const a = document.createElement('a');
    a.href = `./other-page/?id=${object.id}`;

    div.append(img, h3);
    a.append(div);

    return a;
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
    const streetView = document.createElement('iframe');
    streetView.src = object.view;
    // streetView.width = '800';
    // streetView.height = '600';
    // streetView.style.border = `0`;
    // streetView.allowFullscreen = '';
    // streetView.loading = 'lazy';
    div.append(img, h3, ul, streetView);
    return div;
}