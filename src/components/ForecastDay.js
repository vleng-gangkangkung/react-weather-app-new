import React from "react";
import Icon from "../Icon";

import "../styles.css";
import "../Forecast.css";
export default function ForecastDay(props) {
  return (
    <div className="col forecast-dayDate">
      <div className="border-dates-forecast ">
        <div className="day">{props.day}</div>
        <div>{props.data.dt}</div>
      </div>
      <div className="forecast-icon pe-4">
        <Icon size={75} weatherIcon={props.data.weather[0].icon} />
      </div>
      <div className="forecastTemperature" id="forecast-temp-max">
        {Math.round(props.data.temp.max)}&#176;&nbsp;
        <span className="forecastTemperatureMin">
          {Math.round(props.data.temp.min)}&#176;
        </span>
      </div>
    </div>

    // <ForecastDay
    //         day="THU"
    //         date={forecast[0].dt}
    //         maxTemp={forecast[0].temp.max}
    //         minTemp={forecast[0].temp.min}
    //         icon={forecast[0].weather[0].icon}
    //       />
  );
}
