import React, { useState } from "react";

import Cities from "./Cities";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Description from "./Description";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";
import ToggleBg from "./components/ToggleBg";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: response.data.dt * 1000,
      day: "Thurs",
      time: "10:00",
      // date: "29 December",
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      realFeel: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
    });
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
                <form>
                  <div className="form-row">
                    <div className="col-md-9">
                      <div className="form-group">
                        <input
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
            {/* ------------WEATHER DATA--------- */}
            <div className="cityName mb-3 mt-4">
              {weatherData.city.toUpperCase()}
            </div>
            <div className="row line-shadow pb-2">
              <div className="col-md-8">
                <Temperature mainTemp={weatherData.temperature} />
                <Description description={weatherData.description} />
                <MoreInfo
                  date={weatherData.date}
                  // day={weatherData.day.getDay()}
                  // date={weatherData.date.getDate()}
                  // time={weatherData.time}
                  humidity={weatherData.humidity}
                  windSpeed={weatherData.wind}
                  realFeel={weatherData.realFeel}
                />
              </div>
              <div className="col-md-4 mt-3">
                <Icon weatherIcon={weatherData.icon} />
              </div>
            </div>

            {/* ------------FORECAST SECTION--------- */}
            <Forecast />
          </div>
        </div>
      </div>
    );
  } else {
    // let city = "Sydney";
    const apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);

    return "loading weather...";
  }
}
