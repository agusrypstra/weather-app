import axios from "axios";
import React, { useState } from "react";
import './css/SearchBar.css'

function SearchBar() {
  const API_KEY = "RpGBM5ko5HXHyXCihXbi4EaaGDRuy3MJ";
  const CITY_SEARCH_URL =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const [Search, setSearch] = useState("");
  const [Error, setError] = useState(false)
  const handleChange = (e) => {
    const input = e.target.value;
    setSearch(input.toLowerCase());
    console.log(Search);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await axios.get(CITY_SEARCH_URL, {
      params: {
        apikey: API_KEY,
        q: Search,
      },
    });
    if (response.data > 0) {
      setSearchResult(response.data);
    }else{
      setError(true)
    }
  };
  const [searchResult, setSearchResult] = useState([]);

  const farToCelcius = (n) => {
    return (n - 32) / 1.8;
  };

  return (
    <>
      <h2>Select a city</h2>
      <label htmlFor="city"></label>
      <div>
        <input
          type="text"
          name="city"
          id="citySearch"
          onChange={handleChange}
          className={Error ? 'input-error' : 'input'}
        />
        <button className="submit" onClick={handleClick}>
          Buscar
        </button>
      </div>
    </>
  );
}

export default SearchBar;
