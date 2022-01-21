import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="col-10">
      <form>
        <div className="form-row">
          <div className="col-md-9">
            <div className="form-group">
              <input
                type="search"
                className="form-control form-control-md searchCopy pl-4"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <input type="submit" value="search" className="searchCopy btn" />
            </div>
          </div>

          {/* Use current location */}

          <div className="col-1 pl-3 ">
            <a href="/" title="Use your current location">
              <i
                className="fas fa-location-arrow location-btn"
                id="current-location"
              ></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
