import React from 'react'
import WeatherImage from "./WeatherContext.jsx";




const nameOverwrite = [
  {
    code: "GB",
    name: "United Kingdom",
  },
  {
    code: "US",
    name: "United States",
  },
  {
    code: "RU",
    name: "Russia",
  },
];

const getLocalTime = (time, timezone) => {
  const date = new Date((time + timezone) * 1000);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const amOrpm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12; 
  const formattedTime = `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${amOrpm}`;

  return formattedTime;
};

const Travelpage = () => {
  const { weatherData, units, geoData } = useWeather();

  if (weatherData && geoData) {
    return (
      <div className="container">
        {units === "imperial" ? (
          <>
            <div className="row">
              {geoData[0].country === "US" ? (
                <div className="display-5 text-center pb-2">
                  {weatherData.name}, {geoData[0].state},{" "}
                  
                </div>
              ) : (
                geoData[0].country !== "US" && (
                  <div className="display-5 text-center pb-2">
                    {weatherData.name}
                  </div>
                )
              )}
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 text-center text-xxl-end">
                <h1>{Math.round(weatherData.main.temp)}&deg;F</h1>
                <p>
                  <strong>High: </strong>{" "}
                  {Math.round(weatherData.main.temp_max)}
                  &deg;F
                  <br />
                  <strong>Low: </strong> {Math.round(weatherData.main.temp_min)}
                  &deg;F
                  <br />
                  <strong>Condition: </strong> {weatherData.weather[0].main}
                  <br />
                  <WeatherImage condition={weatherData.weather[0].main} />
                </p>
              </div>
              <div className="col-xxl-6">
                <div className="row d-lg-flex flex-row justify-content-center justify-content-xxl-start">
                  <div className="col-4 col-md-2 text-center">
                    <img
                      width="32"
                      height="32"
                      src="https://www.rochesterfirst.com/wp-content/uploads/sites/66/2021/04/sky-1107579_1920.jpg"
                      alt="cloudy"
                    />
                    <p>
                      <strong>Cloud %</strong>
                      <br />
                      {weatherData.clouds.all}%
                    </p>
                  </div>
                  <div className="col-4 col-md-2 text-center">
                    <img
                      width="32"
                      height="32"
                      src="https://thumbs.dreamstime.com/b/man-holding-to-tree-windy-day-image-108186607.jpg"
                      alt="windy"
                    />
                    <p>
                      <strong>Wind</strong>
                      <br />
                      {Math.round(weatherData.wind.speed)} mph
                    </p>
                  </div>
                  
                    <p>
                      <strong>Humidity</strong>
                      <br />
                      {weatherData.main.humidity}%
                    </p>
                  </div>
                </div>
                <div className="row d-lg-flex flex-row justify-content-center justify-content-xxl-start">
                  <div className="col-4 col-md-2 text-center">
                    <img
                      width="32"
                      height="32"
                      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.livescience.com%2F64825-why-earth-has-an-atmosphere.html&psig=AOvVaw038QkGaOQQbf6FwXlzfegb&ust=1725132513624000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJith8m5nYgDFQAAAAAdAAAAABAE"
                      alt="atmospheric-pressure"
                    />
                    <p>
                      <strong>Pressure</strong>
                      <br />
                      {weatherData.main.pressure} hPa
                    </p>
                  </div>
                  <div className="col-4 col-md-2 text-center">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/color/48/sunrise.png"
                      alt="sunrise"
                    />
                    <p>
                      <strong>Sunrise</strong>
                      <br />
                      {getLocalTime(
                        weatherData.sys.sunrise,
                        weatherData.timezone
                      )}
                    </p>
                  </div>
                  <div className="col-4 col-md-2 text-center">
                    <img
                      width="32"
                      height="32"
                      src="https://img.icons8.com/color/48/sunset.png"
                      alt="sunset"
                    />
                    <p>
                      <strong>Sunset</strong>
                      <br />
                      {getLocalTime(
                        weatherData.sys.sunset,
                        weatherData.timezone
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          units === "metric" && (
            <>
              <div className="row">
                {geoData[0].country === "US" ? (
                  <div className="display-5 text-center pb-2">
                    {weatherData.name}, {geoData[0].state},{" "}
                  
                  </div>
                ) : (
                  geoData[0].country !== "US" && (
                    <div className="display-5 text-center pb-2">
                      {weatherData.name}
                    </div>
                  )
                )}
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 text-center text-xxl-end">
                  <h1>{Math.round(weatherData.main.temp)}&deg;C</h1>
                  <p>
                    <strong>High: </strong>{" "}
                    {Math.round(weatherData.main.temp_max)}
                    &deg;C
                    <br />
                    <strong>Low: </strong>{" "}
                    {Math.round(weatherData.main.temp_min)}
                    &deg;C
                    <br />
                    <strong>Condition: </strong> {weatherData.weather[0].main}
                    <br />
                    <WeatherImage condition={weatherData.weather[0].main} />
                  </p>
                </div>
                <div className="col-xxl-6">
                  <div className="row d-lg-flex flex-row justify-content-center justify-content-xxl-start">
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/cloud.png"
                        alt="cloud"
                      />
                      <p>
                        <strong>Cloud %</strong>
                        <br />
                        {weatherData.clouds.all}%
                      </p>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/96/windsock--v1.png"
                        alt="windsock--v1"
                      />
                      <p>
                        <strong>Wind</strong>
                        <br />
                        {Math.round(weatherData.wind.speed)} kph
                      </p>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/96/hygrometer.png"
                        alt="hygrometer"
                      />
                      <p>
                        <strong>Humidity</strong>
                        <br />
                        {weatherData.main.humidity}%
                      </p>
                    </div>
                  </div>
                  <div className="row d-lg-flex flex-row justify-content-center justify-content-xxl-start">
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/atmospheric-pressure.png"
                        alt="atmospheric-pressure"
                      />
                      <p>
                        <strong>Pressure</strong>
                        <br />
                        {weatherData.main.pressure} hPa
                      </p>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/sunrise.png"
                        alt="sunrise"
                      />
                      <p>
                        <strong>Sunrise</strong>
                        <br />
                        {getLocalTime(
                          weatherData.sys.sunrise,
                          weatherData.timezone
                        )}
                      </p>
                    </div>
                    <div className="col-4 col-md-2 text-center">
                      <img
                        width="32"
                        height="32"
                        src="https://img.icons8.com/color/48/sunset.png"
                        alt="sunset"
                      />
                      <p>
                        <strong>Sunset</strong>
                        <br />
                        {getLocalTime(
                          weatherData.sys.sunset,
                          weatherData.timezone
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </div>
    );
  }
};



export default Travelpage