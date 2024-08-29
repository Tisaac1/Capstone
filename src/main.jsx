import React, { useState, useEffect } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Define the Fiveday component
function Fiveday({ lat, lon }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch('/api/WelcomePage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ lat, lon }),
        });

        if (!res.ok) {
          throw new Error('Unable to get weather data');
        }

        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [lat, lon]);

  if (loading) {
    return <div id="loader">Loading...</div>;
  }

  if (error) {
    return <div id="error">{error}</div>;
  }

  return (
    <div id="container">
      <div id="city">{weather.city}</div>
      <div id="currentTemp">{`${weather.currentTemp}°F`}</div>
      <div id="minTemp">{`${weather.minTemp}°F`}</div>
      <div id="maxTemp">{`${weather.maxTemp}°F`}</div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
   
        <Route path="/fiveday" element={<Fiveday lat={40.7128} lon={-74.0060} />} />
      </Routes>
    </Router>
  </StrictMode>
);
