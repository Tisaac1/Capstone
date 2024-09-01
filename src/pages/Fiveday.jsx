import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fiveday() {

  const apiKey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';
  

  const { symbol } = useParams();

  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/350128?apikey=YH5hXE5XEWrZOADpUJASEA06gtoYsBj4`;
  
 
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  });

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;  
  if (!data) return <div>No data available</div>; 


  return (
    <div>
      <h1>5-Day Weather Forecast</h1>
      <div>
        <h2>Location: {data.Headline.Text}</h2>
        {data.DailyForecasts.map((forecast, index) => (
          <div key={index}>
            <h3>Day {index + 1}</h3>
            <p>Date: {forecast.Date}</p>
            <p>Temperature: High {forecast.Temperature.Maximum.Value}°{forecast.Temperature.Maximum.Unit} / Low {forecast.Temperature.Minimum.Value}°{forecast.Temperature.Minimum.Unit}</p>
            <p>Conditions: {forecast.Day.IconPhrase}</p>
            <p>Night Conditions: {forecast.Night.IconPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fiveday;
