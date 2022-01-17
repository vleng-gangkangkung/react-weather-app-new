import React from "react";
import Location from "./Location";
import "../styles.css";

export default function Search() {
  return (
    <div className="col-10">
      <form>
        <div className="form-row">
          <div className="col-md-9">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-md searchCopy pl-4"
                placeholder="Search city or use your current location"
              />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <input type="submit" value="search" className="searchCopy btn" />
            </div>
          </div>
          <div className="col-1 pl-3 ">
            <Location />
          </div>
        </div>
      </form>
    </div>
  );
}
