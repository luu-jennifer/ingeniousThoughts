// config details for Firebase database
import firebaseConfig from "../firebase";
// NPM modules
import { useState } from "react";
import { getDatabase, push, ref } from "firebase/database";



// component to add thoughts to the database
const ThoughtForm = () => {
  // state variables that will hold the user's input from the form
  const [newThought, setNewThought] = useState("");
  // variable to hold the database values
  const database = getDatabase(firebaseConfig);
  // variable to hold the database reference
  const dbRef = ref(database);

  //time variables
  const date = new Date();
  const time = date.toString();

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
        thought: newThought,
        mood: color,
        time: time,
        timestamp: Date.now()
      };
      push(dbRef, obj);
      // clear the input field
      setNewThought("");
    } else {
      // Prevent empty submission. alert the user to enter a thought
      alert("Please type in your thought.");
    };
  };


  // mood color change

  //create variable to store color names
  const colorNames = ['Tomato', 'Blue', 'Turquoise', 'Indigo', 'Orchid', 'Black', 'Salmon'];

  // create state variable to store the color
  const [color, setColor] = useState('Black');

  // create variable to store the color the background color of .storedThoughts section will be changed to
  const moodColor = {backgroundColor: color};

  // create a function to change the color
  const changeColor = () => {
    // create a variable to store a random number
    const randomNum = Math.floor(Math.random() * colorNames.length);
    // set the color state to the color name at the random index
    setColor(colorNames[randomNum]);
  };

  return(
    <section className="thoughtForm">
      <div 
        className="Container"
        style={moodColor}
      >

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
              //random color button
            }
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
            value={newThought}
            />

          {/* create button to submit the form */}
          <button onClick={handleSubmit}>Add Thought</button>
        </form>




      </div>
    </section>
  )
}

export default ThoughtForm;