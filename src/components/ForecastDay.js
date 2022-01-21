import React from "react";

import "../styles.css";
export default function ForecastDay(props) {
  return (
    <div className="col forecast-dayDate">
      <div className="border-dates-forecast">
        <div className="day" id="dayForecast">
          {props.day}
        </div>
        <div>{props.date}</div>
      </div>
      <img
        src="./images/09d.svg"
        alt="icon"
        id="forecast-icon"
        className="weatherIcons"
      />
      <div className="forecastTemperature" id="forecast-temp-max">
        {props.maxTemp}&#176;&nbsp;
        <span className="forecastTemperatureMin">{props.minTemp}&#176;</span>
      </div>
    </div>
  );
}
