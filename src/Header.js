import React from "react";
import Location from "./components/Location";
import Search from "./components/Search";
import ToggleBg from "./components/ToggleBg";
import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="row mt-4">
        <Search />
        <ToggleBg />
      </div>
    </div>
  );
}
