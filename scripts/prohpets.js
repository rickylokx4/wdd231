const url ='https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards')

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

      
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); 
        let portrait = document.createElement('img');
        let text = document.createElement('p');
        let text2 = document.createElement('p');
     
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
        text.textContent = `Date of Birth: ${prophet.birthdate}`;
        text2.textContent = `Place of Birth: ${prophet.birthplace} `;
     
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        portrait.setAttribute('class', 'card')
  
     
        card.appendChild(fullName);
        card.appendChild(text)
        card.appendChild(text2)
        card.appendChild(portrait);
        
        cards.appendChild(card);
    }); 
  }
getProphetData()


