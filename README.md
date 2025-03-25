

# ❄️ Icecold - Weather App  

Icecold is a sleek and interactive weather application that provides real-time weather updates for any city. It features a dynamic UI with **light & dark mode**, fun weather facts, and an engaging design with smooth animations.

## 🚀 Features  

✅ **Real-time Weather Updates** - Get the latest temperature and wind speed for any city.  
✅ **Dynamic Backgrounds** - The app changes backgrounds based on temperature.  
✅ **Shivering Effect** - When it's freezing, the temperature text shivers like it's cold! 🥶  
✅ **Fun Weather Facts** - Get a random fun fact every time you check the weather.  
✅ **Light & Dark Mode** - Switch between light and dark themes.  
✅ **Glitch Effect** - Click "Stay Frosty" for a cool glitch animation.  

## 🌐 APIs Used  

1. **[Nominatim API](https://nominatim.org/)** - Converts city names into geographical coordinates (latitude & longitude).  
2. **[Open-Meteo API](https://open-meteo.com/)** - Provides real-time weather data (temperature & wind speed).  

## 🛠️ How It Works  

1. Enter a city name in the input field.  
2. Click the "Get Weather" button.  
3. The app fetches latitude & longitude using the **Nominatim API**.  
4. Weather data is retrieved using the **Open-Meteo API**.  
5. The UI updates with the temperature, wind speed, and a fun weather fact.  
6. Background images adjust based on temperature.  
7. Users can toggle between light and dark mode.  

## 📂 Project Structure  

```
/icecold-weather-app
│── index.html          # Main HTML file
│── style.css           # CSS file for styling
│── script.js           # Main JavaScript logic


## 🎨 UI Preview  

🌞 **Light Mode:**  
🌙 **Dark Mode:**  
🥶 **Shivering Effect at Low Temperatures**  
🌟 **Glitch Animation on "Stay Frosty" Click**  


## 🔥 Challenges & Solutions  

### **1️⃣ API Integration**  
*Handling multiple APIs and ensuring accurate data retrieval.*  
✅ Solution: Used **async/await** with proper error handling to fetch data efficiently.  

### **2️⃣ Smooth UI/UX**  
*Creating dynamic effects like shivering temperature text and glitch effects.*  
✅ Solution: Added CSS animations and transitions for a sleek, interactive feel.  

### **3️⃣ Light & Dark Mode**  
*Saving user preferences for theme switching.*  
✅ Solution: Used **localStorage** to persist user settings.  

## 💡 Future Improvements  

- Add **hourly & weekly weather forecasts** 🌤️  
- Improve **mobile responsiveness** 📱  
- Implement **geolocation-based weather search** 🌍  

## 👨‍💻 Author  

- **Leon Mwai** | Software Developer  

