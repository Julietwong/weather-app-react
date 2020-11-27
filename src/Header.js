import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="card header">
      <div className="card-body header">
        <div className="row header">
          <div className="col-5">
            <h1 className="app-name">
              {" "}
              <span role="img" aria-label="thinking emoji">
                🤔
              </span>
              Weather Check
            </h1>
          </div>
          <div className="col-7 text-right">
            <form className="form-inline" id="search-form">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="search-input"
                  placeholder="Search for city"
                  autocomplete="off"
                />
              </div>
              <button
                type="submit"
                class="btn btn-light mb-2 mr-2"
                id="search-button"
              >
                <span role="img" aria-label="search">
                  🔍
                </span>
              </button>
              <button className="btn btn-light mb-2 mr-2" id="location-button">
                📌
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
