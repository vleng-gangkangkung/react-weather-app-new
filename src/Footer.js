import React from "react";

import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        Coded and designed by
        <a href="https://vleng.co.uk" target="_blank" rel="noopener noreferrer">
          &nbsp;Vanessa Leng&nbsp;
        </a>
        |
        <a
          href="https://github.com/vleng-gangkangkung/react-weather-app-new"
          rel="noopener noreferrer"
          title="View on Github"
          target="_blank"
        >
          &nbsp;Open Source Code
        </a>
      </small>
    </div>
  );
}
