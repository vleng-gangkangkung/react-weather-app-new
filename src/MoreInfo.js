import React from "react";
import FormattedDate from "./components/FormattedDate";

import "./styles.css";
export default function MoreInfo(props) {
  return (
    <div>
      <div className="row weather-description mt-4 mb-5">
        <div className="col-6">
          <div className="border-dates">
            <strong>Last updated</strong>
            <br />
            <FormattedDate date={props.date} />
          </div>
        </div>

        <div className="col-6  description">
          <div>Humidity: {props.humidity}%</div>
          <div>Windspeed: {Math.round(props.windSpeed)}mph</div>
          <div>Feels like: {Math.round(props.realFeel)}&#176;C</div>
        </div>
      </div>
    </div>
  );
}
