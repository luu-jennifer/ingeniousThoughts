// // // import axios from "axios";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const Weather = () => { 
//   // create state variables to store the weather data from API
//   const [weather, setWeather] = useState(null);

//   // Make an API call to get the weather data from https://open-meteo.com/en/
//   useEffect(() => {

//   axios({
//     url: 'https://api.open-meteo.com/v1/forecast?latitude=49.25&longitude=-123.12&hourly=temperature_2m&current_weather=true&timezone=America%2FLos_Angeles',
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
//   //handle error from Axios docs
//   .catch(function (error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log('Error', error.message);
//     }
//     console.log(error.config);
//   });

// }, [weather]);

//   // Render the weather data
//   return (
//     <div className="weather">
//       <h3>Current Temperature</h3>
//       {/* <p>High {weather.apparent_temperature_max[0]}°C / Low {weather.apparent_temperature_min[0]}°C</p> */}
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
