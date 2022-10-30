import Weather from ".apis/Weather";

const Optional = () => {
  console.log('Optional component');



  return (
    <aside>
      <h2>Optional</h2>

      <div className="moodColor">
        <h3>Select a color to describe your mood:</h3>
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
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          </select>
        <button type="submit">Get Weather</button>
      </form>
      </div>

    {/* TODO: API calls
      1. add temperature by city, 
      2. thought details  */}
      <Weather />

    </aside>
  );
};

export default Optional;