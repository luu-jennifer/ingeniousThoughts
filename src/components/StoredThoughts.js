
import "../partials/_storedThoughts.scss";
// firebase config details
import firebaseConfig from "../firebase";
// NPM modules
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, remove, update} from "firebase/database";
import Joke from "./apis/Joke";

//
const StoredThoughts = (props) => {
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


// create a function to update the favorite count
  const [favoriteCount, setFavoriteCount] = useState(0);
  const updateFavoriteCount = (key) => {
    //update the favorite count
    update(ref(database, key), {
      favoriteCount: favoriteCount + 1
    });
    //set the favorite count to the new value
    setFavoriteCount(favoriteCount + 1);
  };





  //render the thoughts to the DOM
  return(
    <section className="storedThoughts" 
    >
      {/* this will be the data from firebase mounted */}
      <ul>
        {
        /* //loop though the array of thoughts and render each thought to the DOM */
          thoughts.map( ( { key, thought, time, favoriteCount } ) => {
            return(
              // create a list item for each thought
              <li key={key}>
                <h3>{thought}</h3>

                {/* create button to increase fav counter */}
                <button
                  onClick={() => updateFavoriteCount(key, favoriteCount)}
                  >{favoriteCount} ⭐️
                </button>

                {/* //create a button to delete the thought */}
                <button onClick={() => deleteThought(key)}>Delete</button>
                <p>{props.time}</p>
              </li>
            )
          })
        }
        <li>
          <Joke />
          <p>{props.time}</p>
        </li>
      </ul>
    </section>
  )
}

export default StoredThoughts;