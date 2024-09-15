'use client'

import { useState, useEffect } from 'react'
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiDust, WiFog } from 'react-icons/wi'

interface WeatherData {
  temp: number
  description: string
  icon: string
  location: string
  time: string
  date: string
  forecast: Array<{ day: string; temp: number; icon: string }>
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWeather()
    const timer = setInterval(updateTime, 60000) // Update every minute
    return () => clearInterval(timer)
  }, [])

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://wttr.in/?format=j1')
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data = await response.json()
      
      setWeather({
        temp: Math.round(data.current_condition[0].temp_C),
        description: data.current_condition[0].weatherDesc[0].value,
        icon: data.current_condition[0].weatherCode,
        location: data.nearest_area[0].areaName[0].value,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toLocaleDateString([], { weekday: 'short', month: 'numeric', day: 'numeric' }),
        forecast: data.weather.slice(0, 3).map((day: any) => ({
          day: new Date(day.date).toLocaleDateString([], { weekday: 'short' }).toUpperCase(),
          temp: Math.round((parseInt(day.maxtempC) + parseInt(day.mintempC)) / 2),
          icon: day.hourly[4].weatherCode, // Using noon forecast
        }))
      })
    } catch (err) {
      console.error('Failed to fetch weather data:', err)
    } finally {
      setLoading(false)
    }
  }

  const updateTime = () => {
    if (weather) {
      setWeather(prev => ({
        ...prev!,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }))
    }
  }

  const getWeatherIcon = (code: string) => {
    const iconCode = parseInt(code)
    const iconClass = "text-gray-800 dark:text-white" // Add this line
    if (iconCode < 300) return <WiThunderstorm className={iconClass} />
    if (iconCode < 600) return <WiRain className={iconClass} />
    if (iconCode < 700) return <WiSnow className={iconClass} />
    if (iconCode === 800) return <WiDaySunny className={iconClass} />
    if (iconCode > 700 && iconCode < 800) return <WiFog className={iconClass} />
    if (iconCode === 751 || iconCode === 761) return <WiDust className={iconClass} />
    return <WiCloudy className={iconClass} />
  }

  if (loading) return null

  return weather ? (
    <div className="bg-gray-200 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-50 text-gray-800 dark:text-white p-4 rounded-lg shadow-md w-64 backdrop-filter backdrop-blur-sm">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="text-2xl font-bold">{weather.time}</div>
          <div className="text-sm">{weather.date}</div>
          <div className="text-sm mt-1">{weather.location}</div>
        </div>
        <div className="text-4xl">{getWeatherIcon(weather.icon)}</div>
      </div>
      <div className="mb-2">
        <div className="text-3xl font-bold">{weather.temp}°C</div>
        <div className="text-sm">{weather.description}</div>
      </div>
      <div className="flex justify-between text-xs">
        {weather.forecast.map((day, index) => (
          <div key={index} className="text-center">
            <div>{day.day}</div>
            <div className="text-lg my-1">{getWeatherIcon(day.icon)}</div>
            <div>{day.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  ) : null
}