// // import axios from "axios";
import axios from "axios";
import { useState, useEffect } from "react";

const Joke = () => { 
  // create state variables to store the joke data from API
  const [joke, setJoke] = useState(null);

  // Make an API call to get jokes
  useEffect(() => {

  axios({
    url: 'https://v2.jokeapi.dev/joke/Programming?type=single',
    method: 'GET',
  })
  .then( (res) => {
    setJoke(res.data.joke);
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

  const wildcard = 'Joke of the Moment:';
  // Render the joke data
  return (
    <>
      <h3>{wildcard.toUpperCase()}</h3>
      <h4>{joke}</h4>
    </>
  );
};

export default Joke;