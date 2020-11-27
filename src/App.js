import React from "react";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="card main" id="mainCard">
          <Header />
          <CurrentWeather />
        </div>
      </div>
      <Footer />
    </div>
  );
}
