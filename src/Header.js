import React from "react";
import Search from "./Search";
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
