import React from "react";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Description from "./Description";
import MoreInfo from "./MoreInfo";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="cityName mb-3 mt-4">{props.data.city.toUpperCase()}</div>
      <div className="row line-shadow pb-2">
        <div className="col-md-8">
          <Temperature mainTemp={props.data.temperature} />
          <Description description={props.data.description} />
          <MoreInfo
            date={props.data.date}
            humidity={props.data.humidity}
            windSpeed={props.data.wind}
            realFeel={props.data.realFeel}
          />
        </div>
        <div className="col-md-4 mt-3">
          <Icon weatherIcon={props.data.icon} size={250} />
        </div>
      </div>
    </div>
  );
}
