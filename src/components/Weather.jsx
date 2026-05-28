import React from 'react'
import { useEffect, useState } from 'react'
import './Weather.css'
import { MdSearch } from 'react-icons/md';
import humidity from '../assets/humidity.png'
import wind from '../assets/wind.png'


const Weather = () => {

  const [weatherData, setWeatherData] = useState({});

  

  const searchWeather = async (CITY_NAME) => {
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      const response = await fetch(url);
      const data = await response.json();
      
      console.log(data);

      if(data.cod == "404"){
        alert("City not found");
        return;
      }
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

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
  useEffect(() => {
    searchWeather('calicut');
  }, [])

  const handleSearch = () => {
    const city = document.querySelector('input').value;

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
