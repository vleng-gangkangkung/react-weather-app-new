import React from "react";
import Icon from "../Icon";

import "../styles.css";
import "../Forecast.css";
export default function ForecastDay(props) {
  return (
    <div className="col forecast-dayDate">
      <div className="border-dates-forecast">
        <div className="day" id="dayForecast">
          {props.day}
        </div>
        <div>{props.date}</div>
      </div>
      <div className="forecast-icon">
        <Icon size={85} weatherIcon="09d" />
      </div>
      <div className="forecastTemperature" id="forecast-temp-max">
        {props.maxTemp}&#176;&nbsp;
        <span className="forecastTemperatureMin">{props.minTemp}&#176;</span>
      </div>
    </div>
  );
}
