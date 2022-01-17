import React from "react";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="temp mt-3">
        <span id="main-temp-display">{props.mainTemp}</span>
        <span class="degreeSymbol">&#176;</span>
        <span id="celcius" class="mainUnit" title="Convert to Celcius">
          <a href="/">C</a>
        </span>
        <span
          id="fahrenheit"
          class="secondaryUnit"
          title="Convert to Fahrenheit"
        >
          <a href="/">F</a>
        </span>
      </div>
    </div>
  );
}
