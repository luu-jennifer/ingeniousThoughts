import "../partials/_storedThoughts.scss";
// firebase config details
import firebaseConfig from "../firebase";
// NPM modules
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, remove} from "firebase/database";
import Joke from "./apis/Joke";

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
        let dataKey = data[key];
        // push the data into the array
        newState.push({ 
          key: key, 
          thought: dataKey.thought, 
          time: dataKey.time, 
          favoriteCount: dataKey.favoriteCount
        });
      }
      // set the state to the array
      setThoughts(newState);
    });
  }, [dbRef]);

  // create a function to delete a thought
  const deleteThought = (key) => {
    // remove the thought from the database
    remove(ref(database, key));
  };


<<<<<<< HEAD
=======
  
// FIXME: create a function to update the favorite count onClick. useState to update the count. useEffect to update the database.
const [favoriteCounter, setFavoriteCounter] = useState(0);

const updateFavoriteCount = (key) => {
  // update the favorite count in the database
  setFavoriteCounter(favoriteCounter + 1);
};




>>>>>>> colorFeature

  //render the thoughts to the DOM
  return(
    <section className="storedThoughts" 
    >
      {/* this will be the data from firebase mounted */}
      <h2>🤯</h2>
      <ul>
        {
        /* //loop though the array of thoughts and render each thought to the DOM */
          thoughts.map( ( { key, thought, time, favoriteCount } ) => {
            return(
              // create a list item for each thought
              <li key={key}>
                <h3>{thought}</h3>
<<<<<<< HEAD
                <div className="favCount">⭐️{favoriteCount}</div>
=======


                {/* FIXME: favorite counter styles */}
                <p className="favoriteCounter">{favoriteCounter}</p>
                <button 
                className="favCount"
                onClick={updateFavoriteCount}>⭐️{favoriteCount}
                </button>


>>>>>>> colorFeature
                {/* //create a button to delete the thought */}
                <button onClick={() => deleteThought(key)}>Delete</button>
                <p>{time}</p>
              </li>
            )
          })
        }
        <Joke />
      </ul>
    </section>
  )
}

export default StoredThoughts;