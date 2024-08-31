import {useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make the GET request using Axios
        const response = await axios.get('http://localhost:1991/fiveday');
        
        // Set the response data to state
        setData(response.data);
      } catch (err) {
        // Handle any errors
        setError(err.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Render the component
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

export default Fiveday;

