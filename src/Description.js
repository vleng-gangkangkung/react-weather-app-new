import React from "react";

import "./Temperature.css";

export default function Description(props) {
  return (
    <div className="Description">
      <div className="weatherHeading mt-4">{props.description}</div>
    </div>
  );
}
