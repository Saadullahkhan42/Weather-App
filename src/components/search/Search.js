import React, { useEffect, useState } from "react";
import "../style/style.css";

const Search = () => {
  const [search, setSearch] = useState(null);
  const [city, setCity] = useState(null);

  //hook concept
  useEffect(() => {
    const fetchApi = async (props) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8f18a79d66386badad1719af10df465e
      `;
      const response = await fetch(url);
      //   console.log(response);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div className="box">
      <div className="input hover-light-blue">
        <input
          type="search"
          className="inputfield"
          placeholder="Enter City name"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <br />
      {!city ? (
        <p className="wrong">!Incorrect Input</p>
      ) : (
        <div>
          <div className="info">
            <div className="output">
              <h2 className="location">
                <i className="fas fa-map-marker"></i>
                {search}
              </h2>

              <h1 className="temp">{city.temp}°C</h1>
              <h4 className="min_max">
                Min: {city.temp_min}°C | Max: {city.temp_max}°C
              </h4>
              <h4 className="humidty">Humidity: {city.humidity}%</h4>
              <h4 className="feel">Feels like: {city.feels_like}°C</h4>
              <h4 className="pressure">Pressure: {city.pressure}mb</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
