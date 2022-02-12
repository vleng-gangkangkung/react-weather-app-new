import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <div className="temp mt-3">
          <span>{Math.round(props.mainTemp)}</span>
          <span className="degreeSymbol">&#176;</span>
          <span className="mainUnit" title="Convert to Celcius">
            C
          </span>
          <span className="secondaryUnit" title="Convert to Fahrenheit">
            <a href="/" onClick={showFarenheit}>
              F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="temp mt-3">
          <span>{Math.round((props.mainTemp * 9) / 5 + 32)}</span>
          <span className="degreeSymbol">&#176;</span>
          <span className="secondaryUnit" title="Convert to Celcius">
            <a href="/" onClick={showCelcius}>
              C
            </a>
          </span>
          <span className="mainUnit" title="Convert to Fahrenheit">
            F
          </span>
        </div>
      </div>
    );
  }
}
