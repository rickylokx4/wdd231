import { getCurrentYear, getLastModified} from "./functions.mjs";

getCurrentYear()
getLastModified()


const navButton = document.querySelector('#navButton');
const menuLinks = document.querySelector('#navBar');

navButton.addEventListener('click', ()=>{
    menuLinks.classList.toggle('open');
    navButton.classList.toggle('open');
});

let sliderContainer = document.querySelector('.slider-container');
let imagequantity = document.querySelectorAll('.slider-container img')
let index = 1;

setInterval(function(){
    let percentage = index * -100;
    sliderContainer.style.transform = "translateX("+percentage+"%)";
    index++;
    if(index > imagequantity.length-1){
        index = 0;
    }
    
},1000)


 