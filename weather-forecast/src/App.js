import "./App.css";
import Input from "./components/Input";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState("");

  const API_KEY = "cdb7020c69b26f0f17fa5611145318d4";

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}&units=metric`
    );
    const data = await response.data;

    setDegrees(data.main.temp);
    setLocation(data.name);
    setDescription(data.weather[0].description);
    setIcon(data.weather[0].icon);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setCountry(data.sys.country);

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div className="weather_display">
          <h3 className="weather_location">Weather in {location}</h3>
        </div>
        <div>
          <h1 className="weather_degrees">{degrees} ᵒC</h1>
        </div>
        <div className="weather_description">
          <div>
            <div className="weather_description_head">
              <span className="weather_icon">
                <img
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                  alt="weather icon"
                />
              </span>
              <h3>{description}</h3>
            </div>
            <h3>Humidity: {humidity}%</h3>
            <h3>Wind speed: {wind} m/s</h3>
          </div>
          <div className="weather_country">
            <h3>{country}</h3>
            <h2 className="weather_date">7/23/2022, 11:30:24 PM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
