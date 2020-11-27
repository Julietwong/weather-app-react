import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p class="info-text">
        <a
          href="https://github.com/Julietwong/weather-app-react"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a href="https://julietwongmin.com/" rel="noopener noreferrer">
          Juliet Wong Min
        </a>
      </p>
    </div>
  );
}