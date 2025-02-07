import { getCurrentYear, getLastModified } from "./functions.mjs";
import { places } from "./places.mjs";

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
        const title = document.createElement('h3')
        const image = document.createElement('img')
        const description = document.createElement('p')
        const address = document.createElement('address')
        const button = document.createElement('button')
        card.setAttribute("class", "discover-card")
        title.innerHTML = place.name;
        image.setAttribute("src", place.photo_url);
        image.setAttribute("alt", `photography of ${place.name}`);
        image.setAttribute("loading", "lazy");
        description.innerHTML = `Description: ${place.description} `;
        address.innerHTML = `Address: ${place.address} `;
        button.innerHTML = "Learn more"
        card.appendChild(image)
        card.appendChild(title)
        card.appendChild(address)
        card.appendChild(description)
        card.appendChild(button)
        cards.appendChild(card)
    });
}
makeCards(places)
//last visit section
const msToDays = 86400000;
const lastVisitDiv = document.querySelector('#lastVisit')

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
let currentVisit = Date.now()
let daysNotVisit = (currentVisit-lastVisit) / msToDays
if(lastVisit == 0){
    lastVisitDiv.innerHTML = `Welcome! Let us know if you have any questions.`
}
else if(daysNotVisit < 1){
    lastVisitDiv.innerHTML = `Back so soon! Awesome!`
}
else if (daysNotVisit > 1 & daysNotVisit < 2){
    lastVisitDiv.innerHTML = `You last visited 1 day ago.`
}
else{
    lastVisitDiv.innerHTML = `You last visited ${daysNotVisit.toFixed(0)} days ago.`
}
localStorage.setItem("lastVisit-ls", currentVisit)
