const today = new Date();
const year = today.getFullYear();
const yearText = document.getElementById('currentyear');
yearText.innerHTML=today.getFullYear();

let LastModif = new Date(document.lastModified);
const lastModified = document.getElementById('lastModified')
lastModified.innerHTML="Last Modafied: "+ LastModif