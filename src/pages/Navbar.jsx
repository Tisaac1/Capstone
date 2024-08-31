import React from 'react'


import { Link } from "react-router-dom";
import { useWeather } from "../contexts/WeatherContext";


const Navbar = () => {
  
  const { setWeather, setWelcome } = useWeather();

  
  const handleIconClick = async (event) => {
    setWeather(null);
    setWelcome(true);
  };


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            width="48"
            height="48"
            src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg"
            alt="partly-cloudy-day--v1"
            className="d-inline-block align-text-center"
            onClick={handleIconClick}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/radar">
                Radar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;