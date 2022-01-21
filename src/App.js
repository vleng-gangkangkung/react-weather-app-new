import React from "react";
import Cities from "./Cities";
import Header from "./Header";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Description from "./Description";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    day: "Tuesday",
    time: "10:00",
    date: "29 December",
    description: "Broken clouds",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
    realFeel: 14,
  };

  return (
    <div className="App">
      <div className="container">
        <div id="panel" className="lightClass">
          <div className="row">
            <div className="col-md-10">
              <Cities />
            </div>
          </div>

          {/* Search/Current Location/Toggle Bg */}
          <Header />

          <div className="cityName mb-3 mt-4">
            {weatherData.city.toUpperCase()}
          </div>
          <div className="row line-shadow pb-2">
            <div className="col-md-7">
              <Temperature mainTemp={weatherData.temperature} />
              <Description description={weatherData.description} />
              <MoreInfo
                day={weatherData.day}
                date={weatherData.date}
                time={weatherData.time}
                humidity={weatherData.humidity}
                windSpeed={weatherData.wind}
                realFeel={weatherData.realFeel}
              />
            </div>
            <div className="col-md-5 mt-3">
              <Icon />
            </div>
          </div>
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
