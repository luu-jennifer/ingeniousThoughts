import axios from "axios";
import { useState, useEffect } from "react";
import ImgSearch from "./ImgSearch";

const Joke = () => { 
// create state variables to store the joke data from API
const [joke, setJoke] = useState(null);

// API error message handling and display
const message = document.getElementsByClassName("joke");
message.innerHTML = "You're just so good. I'm speechless.";
const [errorMessage, setErrorMessage] = useState("");

// Make an API call to get jokes
useEffect(() => {
  axios({
    url: 'https://v2.jokeapi.dev/joke/Programming?type=single',
    method: 'GET',
  })
  .then( (res) => {
    setJoke(res.data.joke);
  })
  .catch (_ => {
    setErrorMessage(message.innerHTML);
  });
}, [message.innerHTML]);

  // create a function to change the random display:none the Joke
  const randomThought = document.getElementById("randomThought");
  const removeWildcard = () => randomThought.style.display = "none";

  // Render the joke data
  return (
    <>
      <h3 className="wildcard">Random Thought</h3>
      {/* create ternary operator to toggle the joke onClick */} 
        <div className="jokeContainer">
              <h4 className="joke">{joke}{errorMessage}</h4>
          </div>
      <ImgSearch />
      <button onClick={removeWildcard}>Delete</button>
    </>
  );
};

export default Joke;