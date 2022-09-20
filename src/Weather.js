import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [country, setCountry] = useState("");
  let [description, setDescription] = useState("");
  let [icon, setIcon] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?`;
  let ID = `b0de966a5f210c2492572cc7759b218c`;
  let unit = `metric`;

  if (props.city.length > 0) {
    axios
      .get(`${url}q=${props.city}&appid=${ID}&units=${unit}`)
      .then(handleResponse);
  } else {
    axios.get(`${url}q=kyiv&appid=${ID}&units=${unit}`).then(handleResponse);
  }

  function handleResponse(response) {
    console.log(response);
    if (response.status === 200) {
      setTemperature(Math.round(response.data.main.temp));
      setHumidity(response.data.main.humidity);
      setWind(Math.round(response.data.wind.speed));
      setCountry(response.data.sys.country);
      setCity(response.data.name);
      setDescription(response.data.weather[0].description);
      setIcon(
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    } else {
      alert(
        "The city is not found in our list. Please verify it and try again 😉 or ask Google"
      );
    }
  }
  return (
    <div className="Weather">
      <div className="row mt-2">
        <div className="col-6 ">
          <div className="current-city mb-2 ps-4">
            {city},<span className="current-country"> {country}</span>{" "}
          </div>
          <ul>
            <li className="current-temp">{temperature}°C</li>
            <li className="current-humidity">humidity: {humidity}%</li>
            <li className="current-wind">wind: {wind} m/s</li>
          </ul>
        </div>
        <div className="col-6 mt-2 pt-2 text-center">
          <img src={icon} alt={description} />
          <br />
          <span className="current-description">{description}</span>
        </div>
      </div>
    </div>
  );
}
