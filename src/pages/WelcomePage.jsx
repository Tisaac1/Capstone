import React from 'react';
import Fiveday from './Fiveday';
import Travelpage from './Travelpage';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the Weather App</h1>
      <Fiveday />
      <Travelpage />
    </div>
  );
};

export default WelcomePage;
