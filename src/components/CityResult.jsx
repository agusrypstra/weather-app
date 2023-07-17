import React from "react";

function CityResult() {
  return <>
    <div className="result">
      <div>{data.EnglishName}</div> - <h3>{data.Country.EnglishName}</h3>
    </div>
  </>;
}

export default CityResult;
