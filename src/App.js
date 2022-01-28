import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./styles.css";
import Cities from "./Cities";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <Footer />
      </div>
    </div>
  );
}
