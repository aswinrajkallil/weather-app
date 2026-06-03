import React from 'react'
import { useEffect, useState } from 'react'
import './Weather.css'
import { MdSearch } from 'react-icons/md';
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'


// Weather Component starts here
const Weather = () => {

  // State to hold weather data fetched from the API
  const [weatherData, setWeatherData] = useState({});
 
  
// API call to fetch weather data based on city name
  const searchWeather = async (CITY_NAME) => {
    try{

// Constructing the API URL using the city name and API key from environment variables
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
      const response = await fetch(url); // api call to fetch weather data
      const data = await response.json();  // JSON is Converted to JavaScript object using .json() method
      
      console.log(data);

// Handling case when city is not found
      if(data.cod == "404"){
        alert("City not found");
        return;
      }
// Constructing the icon URL using the icon code from the API response
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

// Updating the weatherData state with the fetched data
      setWeatherData({
        city: data.name,
        humidity: data.main.humidity,
        temparature: Math.floor(data.main.temp),
        windspeed: data.wind.speed,
        icon: icon,
      });

    }catch(error){
      console.error('Error fetching weather data:', error);
    }
  }
// Fetching weather data for a default city (Calicut) when the component mounts
  useEffect(() => {
    searchWeather('calicut');
  }, [])

// Handling search functionality when the user clicks the search icon or presses Enter key
  const handleSearch = () => {
    const city = document.getElementById('cityInput').value;

      if (city.trim() === "") {
      alert("Please enter a city name");
      return;
      }

    searchWeather(city);
    document.getElementById('cityInput').value = "";
  }


  return (
    <div className='container'>

        <div className="search">
          <input  
            id="cityInput" 
            type="text" 
            placeholder="Enter city name" 
// Adding event listener for Enter key to trigger search
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}/>
          <MdSearch className="search-icon" size={28} onClick= {handleSearch}/> 
        </div>

        <img src={weatherData?.icon} alt="Weather" className="weather-icon" />

        <div className="weather-info">
          <h2 className="temperature">{weatherData?.temparature}°C</h2>
          <p className="city">{weatherData?.city}</p>

          <div className="weather-data"> 
            <div className="col">
              <img src={humidity} alt="Humidity" className="data-icon" />
              <div>
                <p>{weatherData?.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
              <div className="col">
              <img src={wind} alt="Wind" className="data-icon" />
              <div>
                <p>{weatherData?.windspeed} km/h</p>
                <span>Wind Speed</span>
              </div>

            </div>
          </div>
        </div>

      </div>
  )
}

export default Weather
