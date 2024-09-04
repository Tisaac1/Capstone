import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function WelcomePage() {
  const [formData, setFormData] = useState({
    lat: '',
    lon: ''
  });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setFormData({ lat: latitude, lon: longitude });
            try {
              const response = await axios.post('http://localhost:1991/weatherday/weather', {
                lat: latitude,
                lon: longitude
              });
              setWeatherData(response.data);
            } catch (error) {
              console.error("Error fetching weather data:", error);
            }
          },
          (error) => {
            alert("Error getting location: " + error.message);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1991', formData);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="welcome-page">
      <div className="image-container">
        <img 
          src="https://media.tenor.com/h-tbixPLL74AAAAM/that-summer-feeling-summer.gif" 
          alt="Sunny" 
        />
        <img 
          src="https://media.tenor.com/7PZFTYGYFxQAAAAM/just-a-bit-windy-windy.gif" 
          alt="Windy" 
        />
        <img 
          src="https://i.pinimg.com/originals/b9/4f/bd/b94fbdd31b4696e748a16fb59435bfe7.gif" 
          alt="Rainy" 
        />
      </div>

      <div className="form-container">
        <h2>/Coordinates</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="lat">Latitude:</label>
            <input
              type="text"
              id="lat"
              name="lat"
              value={formData.lat}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lon">Longitude:</label>
            <input
              type="text"
              id="lon"
              name="lon"
              value={formData.lon}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {weatherData && (
          <div className="weather-info">
            <h3>Weather Information:</h3>
            <p>City: {weatherData.city}</p>
            <p>Current Temperature: {weatherData.currentTemp} °C</p>
            <p>Min Temperature: {weatherData.minTemp} °C</p>
            <p>Max Temperature: {weatherData.maxTemp} °C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WelcomePage;
