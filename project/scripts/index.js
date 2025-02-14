import { getCurrentYear, getLastModified} from "./functions.mjs";

getCurrentYear()
getLastModified()


const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});



