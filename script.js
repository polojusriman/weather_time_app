const apiKey = '9fafa218d94548b417aff54852ed3573'; // Replace this

const loading = document.getElementById('loading');
const info = document.getElementById('info');
const locationEl = document.getElementById('location');
const timeEl = document.getElementById('time');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const errorEl = document.getElementById('error');

// 1. Get user location using IP (no key required)
fetch('https://ipapi.co/json/')
  .then(res => res.json())
  .then(data => {
    const city = data.city;
    const country = data.country_name;
    const lat = data.latitude;
    const lon = data.longitude;

    locationEl.textContent = `${city}, ${country}`;
    showTime();
    getWeather(lat, lon);
  })
  .catch(err => {
    loading.style.display = 'none';
    errorEl.textContent = 'Failed to get location.';
  });

// 2. Show current local time
function showTime() {
  const now = new Date();
  const formatted = now.toLocaleTimeString();
  timeEl.textContent = `Current time: ${formatted}`;
}

// 3. Get weather using OpenWeatherMap
function getWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
    .then(res => res.json())
    .then(data => {
      description.textContent = data.weather[0].description;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.textContent = data.main.temp.toFixed(1);

      loading.style.display = 'none';
      info.classList.remove('hidden');
    })
    .catch(err => {
      loading.style.display = 'none';
      errorEl.textContent = 'Failed to fetch weather.';
    });
}
