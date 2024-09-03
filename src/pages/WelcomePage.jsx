import React, { useEffect } from 'react';
import '../App.css'

function WelcomePage() {
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

    getLocation();
  }, []); 

  return (
    <div className="image-container">
      <img 
        src={`https://media.tenor.com/h-tbixPLL74AAAAM/that-summer-feeling-summer.gif`} 
        alt="Sunny" 
      />
      <img 
        src={`https://media.tenor.com/7PZFTYGYFxQAAAAM/just-a-bit-windy-windy.gif`} 
        alt="Windy" 
      />
      <img 
        src={`https://i.pinimg.com/originals/b9/4f/bd/b94fbdd31b4696e748a16fb59435bfe7.gif`} 
        alt="Rainy" 
      />
    </div>
  );
}

export default WelcomePage;
