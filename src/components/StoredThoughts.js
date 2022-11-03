import { Link } from 'react-router-dom';
// firebase config details
import firebaseConfig from "../firebase";
// NPM modules
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, remove, runTransaction, update } from "firebase/database";
import Joke from "./apis/Joke";

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
        let dataKeyImg = data[key].image;
        // push the data into the array
        newState.push({ 
          key: key, 
          thought: dataKey.thought, 
          time: dataKey.time, 
          favoriteCount: dataKey.favoriteCount,
          userId: dataKey.userId,
          mode: dataKey.mode,
          mood: dataKey.mood,
          imgUrl: dataKeyImg.imgUrl,
          altText: dataKeyImg.altText,
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

  //create a function to update favoriteCount
  const updateFavoriteCount = (key) => {
  const postRef = ref(database, key);
  runTransaction(postRef, (post) => {
    if (post) {
      if (post.favoriteCount) {
        post.favoriteCount++;
        update(ref(database, key), post)
      }
    }
  });
}

  //render the thoughts to the DOM
  return(
    <section className="storedThoughts" 
    >
      {/* this will be the data from firebase mounted */}
      <ul>
        {
          //write a ternary operator to check if there are thoughts
          thoughts.length > 0 ?
          // if there are thoughts, map through them
          /* //loop though the array of thoughts and render each thought to the DOM */
          thoughts.map( ( { key, thought, time, favoriteCount, userId, mood, imgUrl, altText } ) => {
            return(
              
              // create a list item for each thought
              <li
              style={{border: `.75rem solid ${mood}`}}
              key={key}>
                <h3>{thought}</h3>
                <div className="imgSearchContainer">
                  <div className="imgContainer">
                    <img src={imgUrl} alt={altText} />
                  </div>
                </div>

                {/* create button to increase fav counter */}
                <button
                  style={{border: `.1rem solid ${mood}`}}
                  onClick={() => updateFavoriteCount(key, favoriteCount)}
                  >{favoriteCount} ⭐️
                </button>

                {/* //create a button to delete the thought */}
                <button 
                  style={{border: `.1rem solid ${mood}`}}
                  onClick={() => deleteThought(key)}>Delete</button>
                <p>Posted by: 
                  <Link 
                  style={{border: `.1rem solid ${mood}`}}
                  to={`/thinker/${userId}`}> { userId }</Link>
                </p>
                <p>{time}</p>
              </li>
            )
          })
          // if there are no thoughts, display a message
          : 
          <h3 className="alert">No added Thinker thoughts to display. Be the first one now.</h3>
        }
        {/* wildcard */}
        <li id="randomThought" className="removeWildcard">
          <Joke />
          <p>{props.passedTime}</p>
        </li>
      </ul>
    </section>
  )
}

export default StoredThoughts;