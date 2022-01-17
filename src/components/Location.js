import React from "react";

import "../styles.css";
export default function Location() {
  return (
    <div className="Location ">
      <a href="/" title="Use your current location">
        <i class="fas fa-location-arrow location-btn" id="current-location"></i>
      </a>
    </div>
  );
}
