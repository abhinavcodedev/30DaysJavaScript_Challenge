// 5d621cb33644a54a9b5c5855a373b03a

const apiKey = '5d621cb33644a54a9b5c5855a373b03a';

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const errorMessageElement = document.getElementById('error-message');
const dayEl = document.getElementById('day');
const dateEl = document.getElementById('date');
const timeEl = document.getElementById('time');
const forecastEl = document.getElementById('forecast');


async function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            alert('City not found. Please try again!!')
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log('Weather data:', data);
        displayWeather(data);
    } catch (error){
        console.error('Error fetching weather data:', error);
        errorMessageElement.textContent ='Error fetching weather data. Please try again.';

    }
}

async function fetchForecast(city) {
     const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
     try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            alert('City not found for forecast data. Please try again!!')
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log('Weather data:', data);
        displayForecast(data);
    } catch (error){
        console.error('Error fetching weather data:', error);
        errorMessageElement.textContent ='Error fetching weather data  form forecast . Please try again.';

    }
}

function displayWeather(data){
    const city = data.name;
    const temperature = (data.main.temp).toFixed(1);      //Math.round(data.main.temp)is used for round temprature;
    const condition = data.weather[0].description;

    locationElement.textContent = city;
    temperatureElement.textContent =`${temperature}°C`;
    conditionElement.textContent =condition.charAt(0).toUpperCase() + condition.slice(1);//For capital letter
    updateDateTime();
    errorMessageElement.textContent ='';

}

function updateDateTime(){
const now = new Date();
const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = days[now.getDay()];
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();

dayEl.textContent = day;
dateEl.textContent = date;
timeEl.textContent = time;
}

searchBtn.addEventListener('click', ()=>{
    const city = cityInput.value.trim();
    console.log(`City entered: ${city}`);
    if(city){
        fetchWeather(city);
        fetchForecast(city);
    } else{
        errorMessageElement.textContent = 'Please enter a city name!';
    }
});

//Event lis for enter key(allow to excute enter key) 
// cityInput.addEventListener('keyup', (event) => {
//     if (event.key === 'Enter') {
//         const city = cityInput.value.trim();
//         if (city) {
//           fetchWeather(city);
//           fetchForecast(city);
//         } else {
//             alert('Please enter a city name.');
//         }
//     }
// });

function displayForecast(data){
    forecastEl.innerHTML='';
    const filteredData = data.list.filter(item => item.dt_txt.includes('12:00:00'));

    filteredData.forEach(dayData => {
        const date = new Date(dayData.dt_txt);
        const day = date.toLocaleDateString(undefined,{weekday:'long'});
        const temperature = dayData.main.temp.toFixed(1);
        const condition = dayData.weather[0].description;
        const forecastDay = document.createElement('div');
        forecastDay.classList.add('forecast-day');

        forecastDay.innerHTML =`<p>${day}</p>
        <p>${temperature}°C</p>
        <p>${condition.charAt(0).toUpperCase() + condition.slice(1)}</p>`;

        forecastEl.appendChild(forecastDay);
    });
}
