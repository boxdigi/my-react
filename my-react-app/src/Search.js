import React, { useState } from "react";

import Weather from "./Weather";

export default function Search() {
  let [citySearch, setCitySearch] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (citySearch.length === 0) {
      alert("Please enter a city");
    } else {
      return citySearch;
    }
  }
  function updateCity(event) {
    setCitySearch(event.target.value);
  }

  return (
    <div className="App">
      <form className="Search" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city..."
            aria-label="Search with one button"
            autoFocus="off"
            autoComplete="off"
            onChange={updateCity}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="search btn btn-primary"
          >
            Search
          </button>
        </div>
      </form>
      <Weather city={citySearch} />
    </div>
  );
}
