// import Weather from ".apis/Weather";
import { useState } from "react";

const Optional = () => {
  //create variable to store color names
  const colorNames = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black'];

  // create state variable to store the color
  const [color, setColor] = useState('black');

  // create variable to change the background color of .storedThoughts section



  return (
    <aside>
      <h2>Optional</h2>

      <div className="moodColor">
        <p>Select a color to describe your mood:</p>
        <form 
//       // onSubmit={ (e) => getColor(e, mood) }
        >
        <select
          name="moodColor"
          id="moodColor"
          // onChange={handleChangeColorChoice}
          // value={colorChoice}
        >
          <option value="placeholder" disabled>Pick one:</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
          </select>
        <button type="submit">Change Mood</button>
      </form>
      </div>

    {/* TODO: API calls
      1. add temperature by city, 
      2. thought details  */}
      {/* <Weather /> */}

    </aside>
  );
};

export default Optional;