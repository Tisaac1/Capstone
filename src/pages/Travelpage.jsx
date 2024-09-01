import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Travelpage = () => {
  const [city, setCity] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [results, setResults] = useState(null);
  const navigate = useNavigate(); 

  //const apiKey = 'YH5hXE5XEWrZOADpUJASEA06gtoYsBj4';
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setLoading(true);
    setError(null); 

    try {
      const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/search?apikey=YH5hXE5XEWrZOADpUJASEA06gtoYsBj4&q=Texas`, {
  
      });

     
      if (response.data && response.data.length > 0) {
        setResults(response.data[0]); 
        navigate(`/Travelpage/${response.data[0].Key}`); 
      } else {
        setResults(null);
        setError('No results found');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="search-page">
      <div className="container">
        <h1>Search for a Major U.S City</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="city" className="form-label"></label>
            <input
              type="text"
              id="major city"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {results && (
          <div className="mt-3">
            <h3>Search Results</h3>
            <p><strong>City:</strong> {results.EnglishName}</p>
            <p><strong>Country:</strong> {results.Country.EnglishName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Travelpage;
