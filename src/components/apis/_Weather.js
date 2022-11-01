// // FIXME: API call crashes app


// // // import axios from "axios";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const Weather = () => { 
//   // create state variables to store the weather data from API
//   const [weather, setWeather] = useState([]);

//   // Make an API call to get the weather data from https://open-meteo.com/en/
//   useEffect(() => {
//     console.log("weather useEffect");

//   axios({
//     url: 'https://api.open-meteo.com/v1/forecast?',
//     method: 'GET',
//     params: {
//       latitude: 49.25, 
//       longitude: -123.125, 
//       current_weather: true,
//       timezone: 'America/Los_Angeles',
//       daily: 'apparent_temperature_max,apparent_temperature_min'
//     },
//   })
//   .then( (res) => {
//     setWeather(res.data.daily);
//   })

// }, []);

//   // Render the weather data
//   return (
//     <div className="weather">
//       <h3>Current Temperature</h3>
//       <p>High {weather.apparent_temperature_max[0]}°C / Low {weather.apparent_temperature_min[0]}°C</p>
//       <form 
//       // onSubmit={ (e) => getWeather(e, cityChoice) }
//       >
//         <select
//           name="cityWeather"
//           id="cityWeather"
//           // onChange={handleChangeCityChoice}
//           // value={cityChoice}
//         >
//           <option value="placeholder" disabled>Pick one:</option>
//           <option value="Vancouver">Vancouver</option>
//           {/* <option value="Toronto">Toronto</option>
//           <option value="Ottawa">Ottawa</option>
//           <option value="Montreal">Montreal</option>
//           <option value="Calgary">Calgary</option>
//           <option value="Edmonton">Edmonton</option>
//           <option value="Winnipeg">Winnipeg</option> */}
//           </select>
//         <button type="submit">Get Weather</button>
//       </form>
//     </div>
//   );
// };

// export default Weather;