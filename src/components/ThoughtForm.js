// config details for Firebase database
import firebaseConfig from "../firebase";
// NPM modules
import { useEffect, useState } from "react";
import { getDatabase, push, ref } from "firebase/database";

import Alert from "./Alert";
import axios from "axios";



// component to add thoughts to the database
const ThoughtForm = (props) => {
  const [imgUrl, setImgUrl] = useState('');
  const [altText, setAltText] = useState('');

  // use state for API error
  const message = <h3 className="alert">No images available currently. Add a text only thought now or come back later. 🤙</h3>;
  const [errorMessage, setErrorMessage] = useState("");
  // const apiKey = "tvNUjjQXoIzuSZjcjR5iGV3CZeg9rj4w3SRqr4lSerE"
  useEffect(() => {
    axios({
      // api call to get an image url from unsplash
      url: 'https://api.unsplash.com/photos/random',
      method: 'GET',
      dataResponse: 'json',
      params: {
          // client_id: apiKey,
          query: 'funny',
        }
    })
    .then( (res) => {
      setImgUrl(res.data.urls.regular);
      setAltText(res.data.alt_description);
    })
    //handle error from Axios docs
    .catch (_ => {
      setErrorMessage(message);
    });
  // eslint-disable-next-line
  }, []);

  // state variables that will hold the user's input from the form
  const [newThought, setNewThought] = useState("");
  //variable to set the alert
  const [alert, setAlert] = useState({show: true, msg: "", type: ""});
  // variable to hold the database values
  const database = getDatabase(firebaseConfig);
  // variable to hold the database reference
  const dbRef = ref(database);
  //create a function to handle change from the user's input
  const handleChange = (e) => {
    // set the state to the user's input
    setNewThought(e.target.value);
  };

  // create a function to submit the user's input to firebase
  const handleSubmit = (e) => {
    // prevent the page from reloading
    e.preventDefault();
    if (newThought !== "") {
      // push the user's input to the database
      const obj = {
        key: userId,
        favoriteCount: 1,
        userId: userId,
        thought: newThought,
        mood: color,
        time: props.passedTime,
        timestamp: Date.now(),
        mode: props.mode,
        image: {
          imgUrl: imgUrl,
          altText: altText,
        },
      };
      push(dbRef, obj);
      // clear the input field
      setNewThought("");
      // set the alert-thanks
      setAlert({show: true, msg: "Thank you for your thought!", type: "thanks"});
    } else {
      // Prevent empty submission. alert the user to enter a thought
      setAlert({show: true, msg: "Please enter a thought", type: "empty"});
    };
  };

  // create a function to remove the alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({show, type, msg});
  };


  // mood color change
  //create variable to store color names
  const colorNames = ['Tomato', 'Blue', 'Turquoise', 'Indigo', 'Orchid', 'Black', 'Salmon'];
  // create state variable to store the color
  const [color, setColor] = useState('Indigo');
  // create variable to store the color the background color of .storedThoughts section will be changed to
  const moodColor = {backgroundColor: color};
  // create a function to change the color
  const changeColor = () => {
    // create a variable to store a random number
    const randomNum = Math.floor(Math.random() * colorNames.length);
    // set the color state to the color name at the random index
    setColor(colorNames[randomNum]);
  };

// Generating a unique user id
  const uid = () => {
    return `thinker-${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
  };
  // // Create state variable to store the userId from the user's Local Storage
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  useEffect(() => {
    // Set new unique user id to localStorage if none found
    if (!localStorage.getItem('thinkerUserId')) {
      // Generate new uid using the function above
      const userId = uid();
      // Sets uid into localStorage
      localStorage.setItem('thinkerUserId', userId);
    }
  // Set the userId state to the value in localStorage
  setUserId(localStorage.getItem('thinkerUserId'));
  }, []);

  return(
    <section className="thoughtForm">
      <div 
        className="container"
        style={moodColor}>
      
      <div className="moodColor">
        <p>Pick a Color to Describe your Mood:</p>
        <p>{color}</p>
          {
            colorNames.map((colorName) => {
              return (
                <button 
                  key={colorName} 
                  onClick={() => setColor(colorName)}>{colorName}
                </button>
              );
            })
          }
          {/* //random color button */}
          <button 
            onClick={changeColor}>Random Color</button>
          </div>


      {/* // create a form to submit a thought */}
        <form>
          <label htmlFor="thought">Tell us your thought</label>
          {/* create input field for the new thought */}
          <input 
            type="text" 
            id="thought" 
            placeholder="Enter your thought here*"
            onChange={handleChange}
            // set the value to the state which will be the user's input then clear the input field
            value={newThought}/>

          {/* create button to submit the form */}
          <button onClick={handleSubmit}>Add Thought</button>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          {errorMessage}
        </form>
      </div> {/* .container ends */}
    </section> //.thoughtForm section ends
  )
}

export default ThoughtForm;