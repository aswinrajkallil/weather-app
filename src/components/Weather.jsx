import React from 'react'
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
  return (
    <div className='container'>

        <div className="search">
          <input  type="text" placeholder="Enter city name" />
          <MdSearch className="search-icon" size='2.5em'/> 
        </div>
        <img src={clear} alt="Clear" className="weather-icon" />

        <div className="weather-info">
          <h2 className="temperature">25°C</h2>
          <p className="city">London</p>

          <div className="weather-data"> 
            <div className="col">
              <img src={humidity} alt="Humidity" className="data-icon" />
              <div>
                <p>80%</p>
                <span>Humidity</span>
              </div>
            </div>
              <div className="col">
              <img src={wind} alt="Wind" className="data-icon" />
              <div>
                <p>15 km/h</p>
                <span>Wind Speed</span>
              </div>

            </div>
          </div>
        </div>

      </div>
  )
}

export default Weather
