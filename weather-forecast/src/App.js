import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="weather">
        <Input />
        <div className="weather_display">
          <h3 className="weather_location">Weather in London</h3>
        </div>
        <div>
          <h1 className="weather_degrees">17.84 </h1>
        </div>
        <div className="weather_description">
          <div>
            <div className="weather_description_head">
              <span className="weather_icon">⛅</span>
              <h3>Partly cloudy</h3>
            </div>
            <h3>Humidity: 34%</h3>
            <h3>Wind speed: 3.66 m/s</h3>
          </div>
          <div className="weather_country">
            <h3>GB</h3>
            <h2 className="weather_date">7/23/2022, 11:30:24 PM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
