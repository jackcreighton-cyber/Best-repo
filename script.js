// script.js

async function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}

function displayWeather(data) {
    if (data.cod === 200) {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `<h3>Weather in ${data.name}</h3><p>${data.weather[0].description}</p><p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>`;
    } else {
        console.log('City not found');
    }
}

// Example usage:
fetchWeather('London').then(displayWeather);
