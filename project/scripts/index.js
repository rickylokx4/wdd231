import { getCurrentYear, getLastModified} from "../data/functions.mjs";

getCurrentYear()
getLastModified()


const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});
// setting Welcome
const msToDays = 86400000;
const welcomeMessage = document.querySelector('#welcome-message')

let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;
let currentVisit = Date.now()
let daysNotVisit = (currentVisit-lastVisit) / msToDays
if(lastVisit == 0){
    welcomeMessage.innerHTML = `Welcome, come and have fun with us!! `
}
else if(daysNotVisit < 1){
    welcomeMessage.innerHTML = `Back so soon! It's obvious that you like fighting games!!`
}
else if (daysNotVisit > 1 & daysNotVisit < 2){
    welcomeMessage.innerHTML = `Your last visit was yesterday, don't forget to register!!`
}
else{
    welcomeMessage.innerHTML = `You last visited ${daysNotVisit.toFixed(0)} days ago, You still have time to register`
}
localStorage.setItem("lastVisit-ls", currentVisit)



