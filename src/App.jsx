import Temperature from "./components/temperature";
import WeatherIcon from "./components/weatherIcon";
import SearchBar from "./components/SearchBar";
import "./main-style.css";
function App() {
  return (
    <div className="main">
      <div className="weather-main">
        <WeatherIcon />
        <Temperature />
      </div>
      <div className="searchBar">
      <SearchBar/>
      </div>
    </div>
  );
}

export default App;
