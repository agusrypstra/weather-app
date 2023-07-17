import React, {useState} from "react";
import './css/temperature.css'
function Temperature() {
    const [Weather, setWeather] = useState("null")

    
  return (
    <>
      <h1 className="title" id="selectedCity">Olavarria</h1>
      <div className="grades-container">
        <h1 className="grades">24°c</h1>
        <div className="details-container">
          <h3 className="humidity" id="humidity">46%</h3>
          <h3 className="wind" id="wind">25km/h</h3>
        </div>
      </div>
    </>
  );
}

export default Temperature;
