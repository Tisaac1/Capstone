import React from 'react';
import Fiveday from './Fiveday';
import Travelpage from './Travelpage';
import WeatherContext from './WeatherContext';

function WelcomePage () {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Weather App</h1>
      <WelcomePage />
      <Fiveday />
      <Travelpage />
      <WeatherContext />
    </div>
  );
};

export default WelcomePage;
