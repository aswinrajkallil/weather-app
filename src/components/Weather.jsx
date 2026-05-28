import React from 'react'
import { useEffect, useState } from 'react'
import './Weather.css'
import { MdSearch } from 'react-icons/md';
import clear from '../assets/clear.png'
import cloud from '../assets/cloud.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'


const Weather = () => {

  const [weatherData, setWeatherData] = useState({});

  const searchWeather = async (CITY_NAME) => {
    try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${import.meta.env.VITE_API_KEY}&units=metric`


      const allIcons = {
        "01d":clear,
        "01n":clear,
        "02d":cloud,
        "02n":cloud,
        "03d":cloud,
        "03n":cloud,
        "04d":drizzle,
        "04n":drizzle,
        "09d":rain,
        "09n":rain,
        "10d":rain,
        "10n":rain,  
        "13d":snow,
        "13n":snow,
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        city: data.name,
        humidity: data.main.humidity,
        temparature: Math.floor(data.main.temp),
        windspeed: data.wind.speed,
        icon: allIcons[data.weather[0].icon] || clear,

      });

    }catch(error){
      console.error('Error fetching weather data:', error);
    }
  }
  useEffect(() => {
    searchWeather('delhi');
  }, [])

  const handleSearch = () => {
    const city = document.querySelector('input').value;
    searchWeather(city);
  }


  return (
    <div className='container'>

        <div className="search">
          <input  type="text" placeholder="Enter city name" />
          <MdSearch className="search-icon" size='2.5em' onClick= {handleSearch}/> 
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
