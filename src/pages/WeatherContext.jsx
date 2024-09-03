import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WelcomePage.css';

const WeatherContext = () => {
  const [neighboringCities, setNeighboringCities] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';
  const locationKey = '350128';
  const url = `http://dataservice.accuweather.com/locations/v1/cities/neighbors/${locationKey}?apikey=${apiKey}`;

  useEffect(() => {
    const fetchNeighboringCities = async () => {
      try {
        const response = await axios.get(url);
        setNeighboringCities(response.data);
        
       
        const weatherPromises = response.data.map(async (city) => {
          const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}`;
          const weatherResponse = await axios.get(weatherUrl);
          return {
            key: city.Key,
            data: weatherResponse.data[0]
          };
        });

        const weatherResults = await Promise.all(weatherPromises);
        const weatherMap = weatherResults.reduce((acc, { key, data }) => {
          acc[key] = data;
          return acc;
        }, {});

        setWeatherData(weatherMap);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNeighboringCities();
  }, [url, apiKey, locationKey]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!neighboringCities || neighboringCities.length === 0) return <div>No neighboring cities found</div>;

  return (
    <div>
      <h1>Weather Information for Neighboring Cities</h1>
      <ul>
        {neighboringCities.map((city) => (
          <li key={city.Key}>
            <h2>{city.LocalizedName}</h2>
            <p>Administrative Area: {city.AdministrativeArea.LocalizedName}</p>
            <p>Country: {city.Country.LocalizedName}</p>
            {weatherData[city.Key] && (
              <div>
                <p>Temperature: {weatherData[city.Key].Temperature.Imperial.Value}°F</p>
                <p>Weather: {weatherData[city.Key].WeatherText}</p>
                <img 
                  src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeOFmxzTEfK5Kf3l58N2o4p8c6XCQ5uY9Ww&s`} 
                  alt="Weather Icon" 
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherContext;
