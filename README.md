# 🌍 Weather & Time Web App

A simple, responsive web application that displays your **current location**, **local time**, and **real-time weather** using your IP address.

Built with **HTML**, **CSS**, and **JavaScript**, and powered by:
- 🌤️ [OpenWeatherMap API](https://openweathermap.org/api)
- 📍 [IPAPI.co Geolocation API](https://ipapi.co/)
- 🕒 JavaScript Date object for live time display

---

## 🚀 Features

- 🌎 Detects your city and country using your IP address
- 🌤️ Displays current weather (temperature, description, icon)
- ⏰ Shows your local time
- 🧭 Clean, mobile-responsive UI
- ☁️ Deployable with GitHub Pages

---

## 🔧 How It Works

- The app uses the **IPAPI.co API** to detect the user's geolocation.
- It then uses the **OpenWeatherMap API** to get weather data based on latitude and longitude.
- The current time is fetched using `new Date()` and updated in real-time.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- REST APIs (OpenWeatherMap, IPAPI)

---

## 📦 Installation

To run this app locally:

1. Clone the repo or download the ZIP
2. Replace the placeholder API key in `script.js` with your OpenWeatherMap key:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
