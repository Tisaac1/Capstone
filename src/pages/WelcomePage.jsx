import React, { useEffect } from 'react';
import Fiveday from './Fiveday';
import Travelpage from './Travelpage';
import WeatherContext from './WeatherContext';

function WelcomePage() {
  // useEffect to run on component mount
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          (error) => {
            alert("Error getting location: " + error.message);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    window.onload = getLocation;
    getLocation();
  }, []); 


  ;
}

export default WelcomePage;