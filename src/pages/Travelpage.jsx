import React from 'react';
import WeatherContext from './WeatherContext';
// import { useWeather } from './WeatherContext'; 
// import WeatherContext from './WeatherContext'; 

const Travelpage = () => {
  
  const { weatherData, units, geoData } = WeatherContext();
  if (!weatherData || !geoData) {
    return <div>Loading...</div>; 
  }
 const locationName = geoData[0].country === "US"
    ? `${weatherData.name}, ${geoData[0].state}`
    : weatherData.name;

  return (
    <div className="travelpage">
      <div className="container">
        <div className="row">
          <div className="display-5 text-center pb-2">
            {locationName}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Travelpage;
