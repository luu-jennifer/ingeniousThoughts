import "../partials/_storedThoughts.scss";
// firebase config details
import firebaseConfig from "../firebase";
// NPM modules
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, remove} from "firebase/database";

//
const StoredThoughts = () => {
  // state
  const [thoughts, setThoughts] = useState([]);
  // variable to hold the database values
  const database = getDatabase(firebaseConfig);
  // variable to hold the database reference
  const dbRef = ref(database);

  // render thoughts from firebase
  useEffect(() => {
    // get data from database
    onValue(dbRef, (res) => {
      // create an array to hold the data
      const newState = [];
      // store response data in a variable
      const data = res.val();
      // loop through the data
      for (let key in data) {
        // push the data into the array
        newState.push({ key: key, thought: data[key] });
      }
      // set the state to the array
      setThoughts(newState);
    });
  }, []);

  // create a function to delete a thought
  const deleteThought = (key) => {
    // remove the thought from the database
    remove(ref(database, key));
  };

  //render the thoughts to the DOM
  return(
    <section className="storedThoughts">
      {/* this will be the data from firebase mounted */}
      <h2>Stored Thoughts from Firebase</h2>
      <ul>
        {
        /* //loop though the array of thoughts and render each thought to the DOM */
          thoughts.map( ( { index, key, thought } ) => {
            return(
              // create a list item for each thought
              <li key={key+index}>
                <h3>{thought}</h3>
                {/* //create a button to delete the thought */}
                <button onClick={() => deleteThought(key)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default StoredThoughts;