import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';




function Fiveday() {

    const apiKey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';

    const params = useParams();
    console.log(params);
    const symbol = params.symbol;
    console.log(symbol);

    
    const url = `http://api.accuweather.com/locations/v1/search?q=san&apikey={apiKey}`;
    console.log(url);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
       
        const response = await axios.get('url');
        
       
        setData(response.data);
      } catch (err) {
       
        setError(err.message);
      }
    };

    
    fetchData();
  }, []); 

 
  return (
    <div>
      <h1>5-Day Forecast</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> 
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Fiveday;
