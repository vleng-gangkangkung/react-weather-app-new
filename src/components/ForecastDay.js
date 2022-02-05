import React from "react";
import Icon from "../Icon";

import "../styles.css";
import "../Forecast.css";
export default function ForecastDay(props) {
  let maxTemperature = Math.round(props.data.temp.max);
  let minTemperature = Math.round(props.data.temp.min);

  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();
  let month = date.getMonth();
  let formattedDate = date.getDate();

  if (month <= 9) {
    month = `0${month}`;
  }

  if (formattedDate <= 9) {
    formattedDate = `0${formattedDate}`;
  }

  let daysMapped = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  console.log(date);

  return (
    <div className="col forecast-dayDate">
      <div className="border-dates-forecast ">
        <div className="day">{daysMapped[day]}</div>
        <div>
          {formattedDate}/{month}
        </div>
      </div>
      <div className="forecast-icon pe-4">
        <Icon size={75} weatherIcon={props.data.weather[0].icon} />
      </div>
      <div className="forecastTemperature" id="forecast-temp-max">
        {maxTemperature}&#176;&nbsp;
        <span className="forecastTemperatureMin">{minTemperature}&#176;</span>
      </div>
    </div>
  );
}
