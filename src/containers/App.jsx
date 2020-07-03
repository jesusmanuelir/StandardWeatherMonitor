import React, { useState } from "react";
import Container from '../components/Container'

function App() {

  const api = {
    key: "",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  const [search, setSearch]   = useState('');
  const [weather, setWeather] = useState({});

  const result = e => {
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(r => {
        setWeather(r);
        setSearch('');
        });
    }
  }


    return (
      <main className={(typeof weather.main != "undefined") ? ((weather.main.temp > 22) ? '' : 'cold') : ''}>
          <div className="search-box">
              <input
                type        = "text"
                className   = "search"
                placeholder = "Search city ..."
                onChange    = {e => setSearch(e.target.value)}
                value       = {search}
                onKeyPress  = {result}

                />
            </div>
            {(typeof weather.main != "undefined") ? (
          <Container 
                    city    = {weather.name}
                    country = {weather.sys.country}
                    temp    = {weather.main.temp}
                    weather = {weather.weather[0].main}
                    icon    = {weather.weather[0].icon}
          />
            ): ('')}
      </main>
    );
  
}

export default App;


