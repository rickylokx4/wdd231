import { getCurrentYear, getLastModified} from "./functions.mjs";

getCurrentYear()
getLastModified()

const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});

// getting information from api(json file)

const url = 'scripts/raking.json'
const infoContainer = document.querySelector('.ranking-container')

async function getRanking(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayRanking(data.game1)
        displayRanking(data.game2)
        displayRanking(data.game3)
        displayRanking(data.game4)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  //`background-size: cover;`
const displayRanking = (data) => {
    console.log(data[0].imageurl)
    const card = document.createElement('div')
    card.setAttribute("class","card")
    const gameName = document.createElement('h2')
    card.appendChild(gameName)
    gameName.innerHTML = data[0].name
    infoContainer.appendChild(card)
    data[0].ranking.forEach((info) => {
        const cardContent = document.createElement('div');
        card.appendChild(cardContent)
        cardContent.innerHTML = `
			<p><span class="rankingtext">Ranking:</span>  ${info.position} </p>
			<p><span class="rankingtext">Nickname: </span>${info.nickname}</p>
			<p><span class="rankingtext">Team:</span> ${info.team} </p>
        `;
    });
}
getRanking(url)
