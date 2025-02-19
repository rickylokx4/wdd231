import { getCurrentYear, getLastModified} from "./functions.mjs";

getCurrentYear()
getLastModified()

// Nav Button Config stars
const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});

let gamesArray = getGamesList() || [];
const filterGames = Array.from(new Set(gamesArray));


//Geting data from the form
const currrentUrl = window.location.href;
const everything = currrentUrl.split('?')
let formData = everything[1].split('&')
let result
function show(info){
    formData.forEach((element) => {
        if(element.startsWith(info)) {
            result = element.split('=')[1].replace("%40","@").replaceAll("%2F","/").replace("%2C+"," ").replace("%2B","").replaceAll("%3A",":").replaceAll("+"," ").replaceAll("%28","(").replaceAll("%29",")")
        }
    })
    return (result)
}
const info = document.querySelector('#information')
info.innerHTML = `
<h2 id ="form-h2">Registration Info</h2>
<p><span class="form-data">Gamer Name: </span>${show("fname")} ${show("lname")}</p>
<p><span class="form-data">Gamer NickName: </span>${show("nickname")}</p>
<p><span class="form-data">Email: </span><a href="${show("email")}">${show("email")}</a></p>
<p><span class="form-data">Phone:</span> ${show("phone")}</p>
<p><span class="form-data">Birthday: </span>${show("birthday")}</p>
<p><span class="form-data">Game:</span> ${show("game")}</p>
<p><span class="form-data">Registration date and time: </span>${show("timestamp")}</p>
<p><span class="form-data">Registrated games: </span>${filterGames}</p>
`

setGamesList()
function setGamesList() {
    gamesArray.push(show("game"))
    localStorage.setItem('games-ls', JSON.stringify(filterGames));
}

function getGamesList() {
    return JSON.parse(localStorage.getItem('games-ls'));
};