import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Rajpura",
    feelsLike: 26.07,
    humidity: 94,
    temp: 25.05,
    tempMax: 25.05,
    tempMin: 25.05, 
    weather: "mist"
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{textAlign: "center", background: "linear-gradient(90deg, #0062ff, #da61ff", height: "98vh"}}>
      <br /><br />
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}