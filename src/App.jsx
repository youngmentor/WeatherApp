import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Fetchweather from "./Api/FetchWeather";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);
  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await Fetchweather(query);
      setWeather(data);
      setQuery("");
      console.log(data)
    }
  };

  useEffect(() => {

  }, [query])
  return (
    <div className="app">
      <div className="main-container">
      <h1>Youngmentor weather App</h1>
      <input
        type="text"
        className="search"
        placeholder="Type in your location"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      
      {weather.main && (
        <div className="city-card">
          <div className="city">
            <div className="date">
              {new Date().toDateString("en-US")}
            </div>

            <h2 className="city-name">
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
            </h2>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt='icon' />
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
          <div className="weather-details">
            <h2>weather details</h2>
            <div className="weather-p">
              <p>Cloud: </p>
              <p> {weather.clouds?.all}%</p>
            </div>
            <div className="weather-p">
              <p>Humidity: </p>
              <p> {weather.main?.humidity}%</p>
            </div>
            <div className="weather-p">
              <p>Wind: </p>
              <p>{weather.wind?.speed}km/h</p>
            </div>
            <div className="weather-p">
              <p>Longitude: </p>
              <p>{weather.coord?.lon}</p>
            </div>
            <div className="weather-p">
              <p>Latitude: </p>
              <p>{weather.coord?.lat}</p>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default App;