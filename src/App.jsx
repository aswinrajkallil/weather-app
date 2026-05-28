// rafce
import React from 'react'
import Weather from './components/Weather'
import './components/Weather.css'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <div className='app'>
      <h1 className="weather-title">Weather App</h1>

      <Weather />
      <Footer />

    <Analytics />
    </div>
  )
}

export default App
