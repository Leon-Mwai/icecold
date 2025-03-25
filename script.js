// 🌎 Fun Weather Facts
const weatherFacts = [
    "Raindrops can be the size of a housefly and fall at more than 30 km/h!",
    "Antarctica is the driest, windiest, and coldest place on Earth.",
    "The fastest recorded wind speed is 407 km/h (253 mph) in a tornado!",
    "Snowflakes can have over 200 unique shapes.",
    "Do you have a map? Because I keep getting lost in your forecast.",
    "Are you made of clouds? Because every time I see you, I just float away.",
    "Are you a snowstorm? Because you just blew me away!",
    "Are you the sun? Because you just melted my heart... and possibly the ice caps.",
    "It can actually be too cold to snow—super cold air holds less moisture!"
    
];

// 🚀 Initialize Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    setupGlitchEffect();
    setupThemeToggle();
});

// ❄️ Glitch Effect on "Stay Frosty"
function setupGlitchEffect() {
    const stayFrostyText = document.getElementById("stay-frosty");

    stayFrostyText.addEventListener("click", () => {
        stayFrostyText.classList.add("glitch");
        setTimeout(() => {
            stayFrostyText.classList.remove("glitch");
        }, 1000); // Stops glitch after 1 second
    });
}



// ☁ Fetch Weather Data
async function getWeather() {
    const city = document.getElementById('city').value.trim();
    const weatherInfoDiv = document.getElementById('weather-info');

    if (!city) {
        alert('Please enter a city');
        return;
    }

    weatherInfoDiv.innerHTML = "<p>Loading weather data...</p>";

    try {
        const geoData = await fetchCityCoordinates(city);
        if (!geoData) {
            weatherInfoDiv.innerHTML = "<p>City not found. Try again.</p>";
            return;
        }

        const weatherData = await fetchWeatherData(geoData.lat, geoData.lon);
        if (!weatherData) {
            weatherInfoDiv.innerHTML = "<p>Weather data unavailable.</p>";
            return;
        }

        displayWeather(weatherData, city);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfoDiv.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
    }
}

// 📍 Fetch City Coordinates
async function fetchCityCoordinates(city) {
    const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
    const geoData = await geoResponse.json();
    return geoData.length ? { lat: geoData[0].lat, lon: geoData[0].lon } : null;
}

// 🌦 Fetch Weather Data
async function fetchWeatherData(lat, lon) {
    const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`
    );
    const weatherData = await weatherResponse.json();
    return weatherData.current_weather ? weatherData : null;
}

// 🧊 Display a Fun Fact
function displayFunFact() {
    const funFactsDiv = document.getElementById('fun-facts');
    const randomFact = weatherFacts[Math.floor(Math.random() * weatherFacts.length)];

    funFactsDiv.style.opacity = "0";
    setTimeout(() => {
        funFactsDiv.innerHTML = `<p>🌎 Fun Fact: ${randomFact}</p>`;
        funFactsDiv.style.opacity = "1";
    }, 300);
}

// ❄️ Display Weather & Add Effects
function displayWeather(data, city) {
    const body = document.body;
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');

    tempDivInfo.innerHTML = '';
    weatherInfoDiv.innerHTML = '';

    if (!data.current_weather) {
        weatherInfoDiv.innerHTML = '<p>Weather data not available.</p>';
        return;
    }

    const temperature = data.current_weather.temperature;
    const windSpeed = data.current_weather.windspeed;
    const weatherCode = data.current_weather.weathercode; // Weather condition code

    tempDivInfo.innerHTML = `<p>${temperature}°C</p>`;
    weatherInfoDiv.innerHTML = `
        <p>${city}</p>
        <p>Wind Speed: ${windSpeed} km/h</p>
    `;

    updateBackgroundAndEffects(temperature, tempDivInfo);

    // 🥚 Easter Egg Trigger
    addEasterEggs(city, weatherCode);

    displayFunFact();
}

// 🌡 Update Background & Effects Based on Temperature
function updateBackgroundAndEffects(temperature, tempDivInfo) {
    const body = document.body;

    if (temperature < 20) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1548195667-1d329af0a472?q=80&w=2127')";
        tempDivInfo.classList.add("shiver");
    } else if (temperature >= 20 && temperature <= 30) {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=2071')";
        tempDivInfo.classList.remove("shiver");
    } else {
        body.style.backgroundImage = "url('https://images.unsplash.com/photo-1437240443155-612416af4d5a?q=80&w=1974')";
        tempDivInfo.classList.remove("shiver");
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
}

// 🎭 Easter Eggs for Special Weather Conditions
function addEasterEggs(city, weatherCode) {
    if (city.toLowerCase().includes("antarctica")) {
        showPenguin();
    } else if (city.toLowerCase().includes("sahara")) {
        showSandstorm();
    } else if (weatherCode >= 200 && weatherCode < 300) { // Thunderstorm
        triggerLightning();
    }
}

function showPenguin() {
    let penguin = document.createElement("div");
    penguin.innerHTML = "🐧";
    penguin.style.position = "absolute";
    penguin.style.bottom = "0";
    penguin.style.left = "-50px";
    penguin.style.fontSize = "40px";
    penguin.style.animation = "waddle 5s linear infinite";
    document.body.appendChild(penguin);
}

function showSandstorm() {
    document.body.style.animation = "sandstorm 8s linear infinite";
}

function triggerLightning() {
    let flash = document.createElement("div");
    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100vw";
    flash.style.height = "100vh";
    flash.style.background = "rgba(255, 255, 255, 0.7)";
    flash.style.opacity = "0";
    flash.style.pointerEvents = "none";
    flash.style.animation = "lightning-flash 0.3s ease-in-out";
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
}
