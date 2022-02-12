import React, { useState, useEffect } from "react";
import ForecastDay from "./components/ForecastDay.js";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false); /// result
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row">
          <div className=" forecastHeading mt-5 ml-3">
            FORECAST FOR THE WEEK
            <span
              className="forecastCelcius"
              title="Temperature displayed in &#176;Celcius"
            >
              &#176;C
            </span>
          </div>
        </div>

        <div className="row ">
          <span className="border-left-forecast"></span>

          {forecast.map((dailyForecast, index) => {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "701239fef296828e0d2dfbfb4ce41702";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
