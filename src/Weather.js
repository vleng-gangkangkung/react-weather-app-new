import React, { useState } from "react";

import Forecast from "./Forecast";
import ToggleBg from "./components/ToggleBg";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./styles.css";

export default function Weather(props) {
  let [bg, setBg] = useState("lightClass");

  function changeClassDark(event) {
    event.preventDefault();
    changeDark();
    function changeDark() {
      setBg("darkClass");
    }
  }

  function changeClassLight(event) {
    event.preventDefault();
    changeLight();
    function changeLight() {
      setBg("lightClass");
    }
  }

  const [weatherData, setWeatherData] = useState({ ready: false });
  let [query, setQuery] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: response.data.dt * 1000,
      day: "Thurs",
      time: "10:00",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
  }

  function searchCity() {
    const apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function searchPopularCity(city) {
    const apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function searchTokyo(event) {
    event.preventDefault();
    searchPopularCity("Tokyo");
  }

  function searchNewYork(event) {
    event.preventDefault();
    searchPopularCity("new york");
  }

  function searchBeijing(event) {
    event.preventDefault();
    searchPopularCity("Beijing");
  }

  function searchSanFrancisco(event) {
    event.preventDefault();
    searchPopularCity("San Francisco");
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function getQuery(event) {
    setQuery(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div id="panel" className={bg}>
            <div className="row">
              <div className="col-md-10">
                <div className="popular-cities">
                  <span>
                    <a href="/" target="_self" onClick={searchTokyo}>
                      Tokyo
                    </a>
                  </span>
                  <span>
                    <a href="/" target="_self" onClick={searchNewYork}>
                      New York
                    </a>
                  </span>
                  <span>
                    <a href="/" target="_self" onClick={searchBeijing}>
                      Beijing
                    </a>
                  </span>
                  <span>
                    <a href="/" target="_self" onClick={searchSanFrancisco}>
                      San Francisco
                    </a>
                  </span>
                </div>
              </div>
            </div>
            {/* ------------SEARCH BAR--------- */}
            <div className="row mt-4">
              <div className="col-10">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-10">
                      <div className="form-group">
                        <input
                          onChange={getQuery}
                          placeholder="Enter city name to view weather and forecast"
                          type="search"
                          className="form-control form-control-md searchCopy pl-4"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="search"
                          className="searchCopy btn btn-light"
                        />
                      </div>
                    </div>{" "}
                  </div>
                </form>
              </div>
              <div className="col-2 ">
                <div className="ToggleBg ps-4 ">
                  <div className="dayNight line-shadow toggle pb-2">
                    <a
                      href="/"
                      title="Change to light theme"
                      onClick={changeClassLight}
                    >
                      <span>LIGHT</span>
                    </a>
                  </div>
                  <div className="dayNight">
                    <div className="toggle">
                      <a
                        href="/"
                        title="Change to dark theme"
                        onClick={changeClassDark}
                      >
                        DARK
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <WeatherInfo data={weatherData} />

            {/* ------------FORECAST SECTION--------- */}
            <Forecast coordinates={weatherData.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "loading";
  }
}
