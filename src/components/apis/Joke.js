import axios from "axios";
import { useState, useEffect } from "react";
import ImgSearch from "./ImgSearch";

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
      console.err(error.response.data);
      console.err(error.response.status);
      console.err(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.err(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.err('Error', error.message);
    }
    console.err(error.config);
  });
}, []);

  // create a function to change the random display:none the Joke
  const randomThought = document.getElementById("randomThought");
  const removeWildcard = () => randomThought.style.display = "none";

  // Render the joke data
  return (
    <>
      <h3 className="wildcard">Random Thought</h3>
      {/* create ternary operator to toggle the joke onClick */} 
        <div className="jokeContainer">
              <h4 className="joke">{joke}</h4>
          </div>
      <ImgSearch />
      <button onClick={removeWildcard}>Delete</button>
    </>
  );
};

export default Joke;