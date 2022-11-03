import firebaseConfig from "../firebase";
import { getDatabase, onValue, ref, update, remove, runTransaction } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  //Show all the thoughts that have been posted for the uid
  const { userId } = useParams();
  const [userThought, setUserThought] = useState([]);
  const database = getDatabase(firebaseConfig);
  const dbRef = ref(database);

  useEffect(() => {
    onValue(dbRef, (res) => {
      const newState = [];
      const data = res.val();
      for (let key in data) {
        let dataKey = data[key];
        let dataKeyImg = data[key].image;
        if (dataKey.userId === userId) {
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
          setUserThought(newState); 
      }
    }
  });
}, [dbRef, userId]);


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

    // create a function to delete a thought
  const deleteThought = (key) => {
    // remove the thought from the database
    remove(ref(database, key));
  };

  return (
    <div className="userThoughts">
      <div className="contentContainer">
      <h2>Thoughts from {userId}</h2>
      </div>
      <ul className="thoughtCard">
        {
          userThought.map( ( { key, thought, time, favoriteCount, userId, mood, imgUrl, altText } ) => {
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
                <p>{time}</p>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
