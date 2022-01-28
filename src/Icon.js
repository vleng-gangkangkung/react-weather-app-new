import React from "react";

import "./styles.css";
export default function Icon(props) {
  // let imageUrl = `images/${props.weatherIcon}.svg`;
  return (
    <div>
      <div className="Icon">
        <img
          src={props.weatherIcon}
          alt="icon"
          className="icon iconBackground"
        />
      </div>
    </div>
  );
}
