// config details for Firebase database
import firebaseConfig from "../firebase";
// NPM modules
import { useState } from "react";
import { getDatabase, push, ref } from "firebase/database";
// styles
import "../partials/_thoughtForm.scss";

// component to add thoughts to the database
const ThoughtForm = () => {
  // state variables that will hold the user's input from the form
  const [newThought, setNewThought] = useState("");
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
    // push the user's input to firebase
    push(dbRef, newThought);
    // clear the input field
    setNewThought("");
  };

  
  

  return(
    <section className="thoughtForm">
    <h2>Share your Thought</h2>
    {/* // create a form to submit a thought */}
    <form>
      <label htmlFor="thought">Your Thought:</label>
      {/* create input field for the new thought */}
      <input 
        type="text" 
        id="thought" 
        placeholder="Enter your thought here"
        onChange={handleChange}
        // set the value to the state which will be the user's input then clear the input field
        value={newThought}
      />
      {/* create button to submit the form */}
      <button onClick={handleSubmit}>Add Thought</button>
    </form>
    </section>

  )
}

export default ThoughtForm;