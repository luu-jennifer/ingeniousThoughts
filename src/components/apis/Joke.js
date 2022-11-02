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
  .catch (_ => {
    alert("There's an error. Please try reloading the page.");
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