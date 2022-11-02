import { Link } from 'react-router-dom';
// firebase config details
import firebaseConfig from "../firebase";
// NPM modules
import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, remove, runTransaction, update } from "firebase/database";
import Joke from "./apis/Joke";
// import ImgSearch from './apis/ImgSearch';

//FIXME: 
//1. Fix counter bug to start at stored value by using transaction()



const StoredThoughts = (props) => {
  // state
  const [thoughts, setThoughts] = useState([]);
  // variable to hold the database values
  const database = getDatabase(firebaseConfig);
  // variable to hold the database reference
  const dbRef = ref(database);

  // TODO: REFRACTOR CODE TO USE A FUNCTION TO HANDLE THE onValue FUNCTION AND THE useEffect FUNCTION. Place the function in App.js and pass it down as a prop to the components that need it.

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


  // create a variable to store the color background color of the container will be changed to mood color
  // const moodContainer = {backgroundColor: mood};

  // create a function to delete a thought
  const deleteThought = (key) => {
    // remove the thought from the database
    remove(ref(database, key));
  };

  //FIXME: use transaction to update the favorite count
// // create a function to update the favorite count
  // const [favoriteCount, setFavoriteCount] = useState(null);
  // const updateFavoriteCount = (key) => {
  // //update the favorite count
  // update(ref(database, key), {
  //   favoriteCount: favoriteCount + 1
  // });
  // //set the favorite count to the new value
  // setFavoriteCount(favoriteCount + 1);
  // };
  

  const updateFavoriteCount = (key) => {

    // console.log('updateFavoriteCount func', key);

      const postRef = ref(database, key);
      console.log(postRef, "postRef");

  runTransaction(postRef, (post) => {
    if (post) {
      console.log(post, "post");
      if (post.favoriteCount) {
        post.favoriteCount++;
        update(ref(database, key), post)

      //   post.stars[uid] = null;
      // } else {
      //   post.starCount++;
      //   if (!post.stars) {
      //     post.stars = {};
      //   }
      //   post.stars[uid] = true;
        console.log('checking...', post.favoriteCount);
      }
    }
    // return post;
  });
}

// import { getDatabase, ref, runTransaction } from "firebase/database";

// function toggleStar(uid) {
//   const db = getDatabase();
//   const postRef = ref(db, '/posts/foo-bar-123');

//   runTransaction(postRef, (post) => {
//     if (post) {
//       if (post.stars && post.stars[uid]) {
//         post.starCount--;
//         post.stars[uid] = null;
//       } else {
//         post.starCount++;
//         if (!post.stars) {
//           post.stars = {};
//         }
//         post.stars[uid] = true;
//       }
//     }
//     return post;
//   });
// }




  //render the thoughts to the DOM
  return(
    <section className="storedThoughts" 
    >
      {/* this will be the data from firebase mounted */}
      <ul>
        {

        //   //write a logic to check if there are thoughts
          thoughts.length > 0 ?
        //   // if there are thoughts, map through them

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
          : <h3 className="alert">There are no thoughts to display</h3>
        }

        <li id="randomThought" className="removeWildcard">
          <Joke />
          <p>{props.passedTime}</p>
        </li>
      </ul>
    </section>
  )
}

export default StoredThoughts;