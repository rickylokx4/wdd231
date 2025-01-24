import { getCurrentYear, getLastModified, getTomorrow, getAfterTomorrow} from "./functions.mjs";
// Nav Button Config stars
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#animateLinks');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
// footer Time Config Starts
getCurrentYear()
getLastModified()

// weather config stars
const weatherIcon = document.querySelector('#weather-icon');
const city = document.querySelector('#city')
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('#weather-desc');
const highTemp = document.querySelector('#high-temp')
const lowTemp = document.querySelector('#low-temp')
const humidity = document.querySelector('#humidity')
// const sunrise = document.querySelector('#sunrise')
// const sunset = document.querySelector('#sunset')
const latitude = "-14.074972494262033";
const longitude = "-75.71878663938374";
const appid = "e60b9c45685a0815605f08d9a36c7013";
const weatherurl = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appid}&units=imperial`;
async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        console.log(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  function displayResults(data) {
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', weather);
    city.textContent = `${data.name}`
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.textContent = `${data.weather[0].description}`;
    highTemp.textContent = `${data.main.temp_max}`;
    lowTemp.textContent = `${data.main.temp_min}`;
    humidity.textContent = `${data.main.humidity}%`;
  }
apiFetch(weatherurl)

// weather forecast config stars
const forecast = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${appid}&units=imperial`;
const todayForecast = document.querySelector('#today-forecast');
const tomorrowForecast = document.querySelector('#tomorrow-forecast')
const afterTomorrowForecast = document.querySelector('#after-tomorrow-forecast')
async function forestFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  function displayForecast(data) {
    todayForecast.innerHTML = `${data.list[0].main.temp}&deg;F`;
    tomorrowForecast.innerHTML = `${getTomorrow()}: ${data.list[8].main.temp}&deg;F`;
    afterTomorrowForecast.innerHTML = `${getAfterTomorrow()}: ${data.list[16].main.temp}&deg;F`;
  }
forestFetch(forecast)