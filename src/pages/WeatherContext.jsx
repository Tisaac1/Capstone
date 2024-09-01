import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherContext() {
  const { locationKey } = useParams(); // Get location key from URL parameters
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YH5hXE5XEWrZOADpUJASEA06gtoYsBj4&q=columbus&alias=ohio`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No data available</div>;

  return (
    <div>
      <h1>Historical Weather Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Location: {item}</p>
            <p>Date: {item.Date}</p>
            <p>Temperature: {item.Temperature.Metric.Value}°{item.Temperature.Metric.Unit}</p>
            <p>Conditions: {item.WeatherText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherContext;
