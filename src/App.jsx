// rafce
import React from 'react'
import Weather from './components/Weather'
import './components/Weather.css'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='app'>
      <h1 className="weather-title">Weather App</h1>
      <Weather />
      <Footer />
    </div>
  )
}

export default App
