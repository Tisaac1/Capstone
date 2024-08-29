import React from 'react'



 function Travelpage ({ location, currentTemp, condition, image }) {
  const loaded = () => {
    return (
      <>
        <img src={image.condition.icon} alt="weather icon" width="40%"/>
        <h1>{currentTemp.temp_f} °F</h1><br></br>
        <p 
        style={{
          
        }}
        >{location.name}</p>  
      </>
    )
  }

  const loading = () => {
    return <h1>Location not found</h1>
  }

  return location && currentTemp ? loaded() : loading();
}

export default Travelpage