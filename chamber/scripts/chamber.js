// Nav Button Config stars
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
// Nav Button Config ends

// Nav Time Config Starts
const today = new Date();
const year = today.getFullYear();
const yearText = document.getElementById('currentyear');
yearText.innerHTML = year;

let LastModif = new Date(document.lastModified);
const lastModified = document.getElementById('lastModified')
lastModified.innerHTML="Last Modafied: "+ LastModif
// // Nav Button Config ends

//adding members to the directory

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {

	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

//getting js
const url ='scripts/members.json';
const cards = document.querySelector('#cards')

async function getMembers() {
	const response = await fetch(url);
	const data = await response.json();
	displayCompanies(data.companies)	
}

/* making cards*/
const displayCompanies = (companies) => {
	companies.forEach((company) =>{

		let card = document.createElement('section')
		let logo = document.createElement('img');
		let companyName = document.createElement('h2');
		let companyAdress = document.createElement('p');
		let phoneNumber = document.createElement('p');
		let webPage = document.createElement('a');

		logo.setAttribute('src', company.imageurl)
		logo.setAttribute('alt', `${company.company_name} logo`)
		logo.setAttribute('loading', 'lazy');
		logo.setAttribute('width', '200');
        logo.setAttribute('height', '100');
		webPage.setAttribute('href', '#');
		card.setAttribute('class', 'card');
		
		companyName.textContent = company.company_name
		companyAdress.textContent = company.address
		phoneNumber.textContent = company.phone
		webPage.innerHTML = company.website

		card.appendChild(logo)
		card.appendChild(companyName)
		card.appendChild(companyAdress)
		card.appendChild(phoneNumber)
		card.appendChild(webPage)

		cards.appendChild(card)
	})
};
getMembers()
