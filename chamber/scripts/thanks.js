import { getCurrentYear, getLastModified } from "./functions.mjs";

// footer Time Config Starts
getCurrentYear()
getLastModified()

// Nav Button Config stars
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateLinks');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
//Geting data from the form
const currrentUrl = window.location.href;
const everything = currrentUrl.split('?')
let formData = everything[1].split('&')
console.log(formData)
let result
function show(info){
    formData.forEach((element) => {
        if(element.startsWith(info)) {
            result = element.split('=')[1].replace("%40","@").replaceAll("%2F","/").replace("%2C+"," ").replaceAll("%3A",":").replaceAll("+"," ")
        }
    })
    return (result)
}
const info = document.querySelector('#information')
info.innerHTML = `

<h2 id ="form-h2">Membership Aplication Info</h2>
<p><span class="form-data">Business/Organization: </span>${show("organization")}</p>
<p><span class="form-data">Organizational title: </span>${show("organizational-title")}</p>
<p><span class="form-data">Aplicant: </span>${show("fname")} ${show("lname")}</p>
<p><span class="form-data">Email: </span><a href="${show("email")}">${show("email")}</a></p>
<p><span class="form-data">Phone:</span> ${show("phone")}</p>
<p><span class="form-data">Membership:</span> ${show("membership")}</p>
<p><span class="form-data">Business's description:</span> ${show("description")}</p>
<p><span class="form-data">Application date and time: </span>${show("timestamp")}</p>


`
