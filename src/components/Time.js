const Time = () => {
  const date = new Date();
  const time = date.toString();

  return (
    <div className="time">
      <h3>Local Time</h3>
      <p>{time}</p>
      <h3>Current Temperature</h3>
      {/* <p>{temp}°C</p> */}
      <p>00°C</p>
      <form 
      // onSubmit={ (e) => getWeather(e, cityChoice) }
      >
        <select
          name="cityWeather"
          id="cityWeather"
          // onChange={handleChangeCityChoice}
          // value={cityChoice}
        >
          <option value="placeholder" disabled>Pick one:</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Toronto">Toronto</option>
          <option value="Ottawa">Ottawa</option>
          <option value="Montreal">Montreal</option>
          <option value="Calgary">Calgary</option>
          <option value="Edmonton">Edmonton</option>
          <option value="Winnipeg">Winnipeg</option>
          </select>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  )
};

export default Time;