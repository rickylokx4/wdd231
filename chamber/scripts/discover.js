import { getCurrentYear, getLastModified } from "./functions.mjs";
import { places } from "./places.mjs";
console.log(places)

getCurrentYear();
getLastModified();

// Nav Button Config stars
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateLinks');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// creating cards

const cards = document.querySelector('#discover-cards')

function makeCards(places){
    places.forEach(place => {

        const card = document.createElement('div')
        const title = document.createElement('h2')
        const image = document.createElement('img')
        const description = document.createElement('p')
        const address = document.createElement('p')
        const button = document.createElement('button')

        title.innerHTML = place.name;
        image.setAttribute("src", place.photo_url);
        description.innerHTML = place.description;
        address.innerHTML = place.adress;
        
        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(description)
        card.appendChild(address)
        cards.appendChild(card)
    });


}
makeCards(places)

