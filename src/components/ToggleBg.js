import React from "react";

import "../styles.css";
export default function ToggleBg() {
  return (
    <div className="ToggleBg ps-4 ">
      <div className="dayNight line-shadow toggle pb-2">
        <a href="/" title="Change to light theme">
          <span>LIGHT</span>
        </a>
      </div>
      <div className="dayNight">
        <div className="toggle">
          <a href="/" title="Change to dark theme">
            DARK
          </a>
        </div>
      </div>
    </div>
  );
}
