import React, { useState } from "react";

import Cities from "./Cities";
import Forecast from "./Forecast";
import ToggleBg from "./components/ToggleBg";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./styles.css";

export default function Weather(props) {
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
          <div id="panel" className="lightClass">
            <div className="row">
              <div className="col-md-10">
                <Cities />
              </div>
            </div>
            {/* ------------SEARCH BAR--------- */}
            <div className="row mt-4">
              <div className="col-10">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-9">
                      <div className="form-group">
                        <input
                          onChange={getQuery}
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
                    </div>

                    {/* ------------CURRENT LOCATION ICON--------- */}

                    <div className="col-1 pl-3 ">
                      <a href="/" title="Use your current location">
                        <i
                          className="fas fa-location-arrow location-btn"
                          id="current-location"
                        ></i>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-2 ">
                <ToggleBg />
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
    return "loading weather...";
  }
}
