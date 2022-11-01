import firebaseConfig from "../firebase";
import { getDatabase, onValue, ref, update, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { 
  useParams,
  Link
} from "react-router-dom";
import ImgSearch from "./apis/ImgSearch";

const User = () => {
  //Show all the thoughts that have been posted for the UID

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
        // if (dataKey.userId === userId) {
        //   newState.push({
        //     key: key,
        //     thought: dataKey.thought,
        //     time: dataKey.time,
        //     favoriteCount: dataKey.favoriteCount,
        //     userId: dataKey.userId,
        //     mode: dataKey.mode,
        //   });
        if (dataKey.userId !== userId) {
          //if userId is not found then render alert message
          <h2 className="alert">Sorry, we can't find this user. Please go back to Home</h2>
        } else {
          newState.push({
            key: key,
            thought: dataKey.thought,
            time: dataKey.time,
            favoriteCount: dataKey.favoriteCount,
            userId: dataKey.userId,
            mode: dataKey.mode,
        });
          setUserThought(newState); 
      }
    }
  });
}, [dbRef, userId]);

// // create a function to update the favorite count
  const [favoriteCount, setFavoriteCount] = useState(null);
  const updateFavoriteCount = (key) => {
  //update the favorite count
  update(ref(database, key), {
    favoriteCount: favoriteCount + 1
  });
  //set the favorite count to the new value
  setFavoriteCount(favoriteCount + 1);
  };

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
        {userThought.map(( { key,thought, time, favoriteCount, userId } ) => {
          return (
              // create a list item for each thought
              <li key={key}>
                <h3>{thought}</h3>
                <ImgSearch />
                {/* create button to increase fav counter */}
                <button
                  onClick={() => updateFavoriteCount(key, favoriteCount)}
                  >{favoriteCount} ⭐️
                </button>

                {/* //create a button to delete the thought */}
                <button onClick={() => deleteThought(key)}>Delete</button>
                <p>Posted by: 
                  <Link to={`/thinker/${userId}`}> { userId }</Link>
                </p>
                <p>{time}</p>
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
