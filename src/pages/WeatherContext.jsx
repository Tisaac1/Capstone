import React from 'react';
import { Link } from 'react-router-dom';
import Fiveday from './Fiveday';

const WeatherContext = () => {
  const { weatherData } = Fiveday(); 

 
  if (!weatherData.length) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='WeatherContext'>
      {weatherData.map((temp) => {
        const { city, symbol } = temp; 

        return (
          <Link key={symbol} to={`/WelcomePage/${symbol}`}>
            <h2>{city}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default WeatherContext;

