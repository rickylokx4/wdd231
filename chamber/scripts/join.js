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

//timestamp

const timestamp = new Date().toLocaleString();
console.log(timestamp)
document.querySelector('#timestamp').value = timestamp;

// mebership container

const url= 'scripts/membership.json'
const mebershipContainer = document.querySelector('#membership-cards')

async function getMembership() {
	const response = await fetch(url);
	const data = await response.json();
	diplayMembership(data.memberships)
}

const diplayMembership = (memberships) => {
	memberships.forEach((membership) => {
		const card = document.createElement('div')
		const membershipName = document.createElement('h2')
		const membershipButton = document.createElement('button')
		const dialog = document.createElement('dialog')
		const dialogDiv = document.createElement('div')
		const dialogTitle = document.createElement('h2')
		const dialogButton = document.createElement('button')
		const dialogParagraph = document.createElement('p')



		card.setAttribute("class", "card")

		membershipName.innerHTML = membership.name
		membershipButton.innerText = "Learn More"

		dialogDiv.appendChild(dialogTitle)
		dialogDiv.appendChild(dialogButton)
		dialog.appendChild(dialogDiv)
		dialog.appendChild(dialogParagraph)
		card.appendChild(dialog)
		card.appendChild(membershipName)
		card.appendChild(membershipButton)
		mebershipContainer.appendChild(card)

		dialogButton.addEventListener('click', ()=> {dialog.close()})
		membershipButton.addEventListener('click', ()=> {showContent(membership)})

		function showContent(data){
			dialogTitle.innerHTML = `${data.name} Membership`
			dialogButton.innerHTML = "&#10006;"
			dialogParagraph.innerHTML = `
			<p><span class="dialog-text">Cost:</span> ${data.cost} ${data.currency}</p>
			<p><span class="dialog-text">Trainings:</span> ${data.trainings}</p>
			<p><span class="dialog-text">Advertising:</span> ${data.advertising}</p>
			<p><span class="dialog-text">Event's notifications:</span> ${data.event_notifications}</p>
			<p><span class="dialog-text">Directory: </span> ${data.directory}</p>
			
			
			`

			dialog.showModal()
		}
		
	});
}
getMembership()