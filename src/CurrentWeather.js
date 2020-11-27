import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentWeatherData = {
    cityName: "Melbourne",
    date: "Friday, 20 November, 14:03",
    weatherIcon: "http://openweathermap.org/img/wn/10d@2x.png",
    weatherDescription: "Rainy",
    currentTemperature: 19,
    currentWindSpeed: 24,
    currentHumidity: 60
  };

  return (
    <div className=" card CurrentWeather">
      <div className="card-body">
        <h2 className="location">{currentWeatherData.cityName}</h2>
        <p className="date">{currentWeatherData.date}</p>
        <div className="row today-forecast">
          <div className="col-8">
            <div className="row">
              <div className="col-5">
                <img
                  className="current-weather-icon"
                  src={currentWeatherData.weatherIcon}
                  alt="icon"
                />
                <p className="current-weather-description">
                  {currentWeatherData.weatherDescription}
                </p>
              </div>
              <div className="col-7">
                <p>
                  <span className="current-temperature">
                    {currentWeatherData.currentTemperature}
                  </span>
                  <a
                    className="temperature-unit celcius active"
                    id="unit-celcius"
                    href="/"
                  >
                    °C
                  </a>
                  <a
                    className="temperature-unit farenheit"
                    id="unit-farenheit"
                    href="/"
                  >
                    °F
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 weather-details">
            <p className="weather-details" id="wind-speed">
              <span role="img" aria-label="wind emoji">
                💨
              </span>{" "}
              Wind: {currentWeatherData.currentWindSpeed} km/h
            </p>
            <p className="weather-details" id="humidity">
              <span role="img" aria-label="humidity emoji">
                💧
              </span>
              Humidity: {currentWeatherData.currentHumidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
