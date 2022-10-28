

// // import axios from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

const Weather = () => { 
  // create state variables to store the weather data from API
  const [weather, setWeather] = useState(null);

  // Make an API call to get the weather data from https://open-meteo.com/en/
  useEffect(() => {

// https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&hourly=temperature_2m&current_weather=true&timezone=America%2FLos_Angeles',

    axios({
      url: 'https://api.open-meteo.com/v1/forecast',
      method: 'GET',
      dataResponse: 'json',
      params: {
        latitude: 49.25,
        longitude: -123.12,
        current_weather: true,
        timezone: 'America/Los_Angeles'
      },
    })
    .then( (res) => {
      console.log("res", res.data);
      setWeather(res.data.current_weather);
    })
    //handle error from Axios docs
    .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

  }, []);

  // Render the weather data
  return (
    <div className="weather">
      <h3>Weather</h3>
      <ul>
        <li>
          Location: Vancouver
        </li>
        <li>
          Current temperature: {weather.temperature}°C
        </li>
      </ul>
    </div>
  );
};

export default Weather;
