import React from "react";

import "../styles.css";
export default function ToggleBg() {
  return (
    <div className="ToggleBg">
      <div class="dayNight line-shadow toggle pb-2">
        <a href="/" onclick="changeLight()" title="Change to light theme">
          <span>LIGHT</span>
        </a>
      </div>
      <div class="dayNight">
        <div class="toggle">
          <a href="/" onclick="changeDark()" title="Change to dark theme">
            DARK
          </a>
        </div>
      </div>
    </div>
  );
}
