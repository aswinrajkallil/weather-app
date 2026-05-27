// rafce
import React from 'react'
import Weather from './components/Weather'
import './components/Weather.css'

const App = () => {
  return (
    <div className='app'>
      <h1 className="weather-title">Weather App</h1>
      <Weather />
      
    </div>
  )
}

export default App
