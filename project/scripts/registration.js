import { getCurrentYear, getLastModified} from "./functions.mjs";

getCurrentYear()
getLastModified()

const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});
// config form age + 15
document.getElementById("my-date").max = "2010-01-01";

//timestamp

const timestamp = new Date().toLocaleString();
console.log(timestamp)
document.querySelector('#timestamp').value = timestamp;

// getting info from api (local json)

const url = 'scripts/games.json'
const infoContainer = document.querySelector('#games-cards')

async function getGamesInfo(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayGames(data.games)
        displayGames(data.games1)
} else {
    throw Error(await response.text());
}
} catch (error) {
  console.log(error);
}
}

const displayGames = (games) => {
    const card = document.createElement('section')
    games.forEach((game) =>{
        //creating img 
        
        const img = document.createElement('img')
        //creating dialog
        const dialog = document.createElement('dialog')
		const dialogDiv = document.createElement('div')
		const dialogTitle = document.createElement('h2')
		const dialogButton = document.createElement('button')
		const dialogParagraph = document.createElement('p')
        //imagen settings
        card.setAttribute("class", "card")
        img.setAttribute("src", `${game.imageurl}`)
        img.setAttribute("alt", `${game.name} poster`)
        img.setAttribute("loanding", "lazy")
        //adding cards content
        dialogDiv.appendChild(dialogTitle)
        card.appendChild(img)
        infoContainer.appendChild(card)
        dialogDiv.appendChild(dialogButton)
        dialog.appendChild(dialogDiv)
        dialog.appendChild(dialogParagraph)
        infoContainer.appendChild(dialog)
        dialogButton.addEventListener('click', ()=> {dialog.close()})
        img.addEventListener('click', ()=> {showContent(game)})

        function showContent(data){
			dialogTitle.innerHTML = `${data.name} Tournament`
			dialogButton.innerHTML = "&#10006;"
			dialogParagraph.innerHTML = `
			<p><span class="dialog-text">First Place:</span> ${data.firstPlace}</p>
			<p><span class="dialog-text">Second Place:</span> ${data.secondPlace}</p>
			<p><span class="dialog-text">Third Place:</span> ${data.thirdPlace}</p>
			<p><span class="dialog-text">Top 10 prizes:</span> ${data.top10}</p>
            <p><span class="dialog-text">Inscription:</span> ${data.inscription}</p>
			`
            dialog.showModal()
		}




    })};


getGamesInfo(url)
