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
      push(dbRef, newThought);
      // clear the input field
      setNewThought("");
    } else {
      // Prevent empty submission. alert the user to enter a thought
      alert("Please type in your thought.");
    };
  };



  return(
    <section className="thoughtForm">
    {/* // create a form to submit a thought */}
    <form>
      <label htmlFor="thought">Your Thought:</label>
      {/* create input field for the new thought */}
      <input 
        type="text" 
        id="thought" 
        placeholder="Enter your thought here*"
        onChange={handleChange}
        // set the value to the state which will be the user's input then clear the input field
        value={newThought}
      />

      {/* Optional input */}
      {/* <h2>Optional</h2> */}


      {/* create button to submit the form */}
      <button onClick={handleSubmit}>Add Thought</button>
    </form>
    </section>

  )
}

export default ThoughtForm;