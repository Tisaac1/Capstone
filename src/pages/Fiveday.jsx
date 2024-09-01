import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fiveday() {
  // API key and base URL
  const apiKey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';
  
  // Get the symbol parameter from the URL
  const { symbol } = useParams();
  
  // Construct the API URL using the symbol
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/350128?apikey=YH5hXE5XEWrZOADpUJASEA06gtoYsBj4`;
  
  // State for data, loading, and error
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // New state for loading

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(url); // Use the constructed URL
        setData(response.data);
        setLoading(false);e
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependency on URL to refetch if symbol changes

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error: {error}</div>; // Error state
  if (!data) return <div>No data available</div>; // No data

  // Render the fetched data
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
