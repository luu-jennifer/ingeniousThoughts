const Time = () => {
  const date = new Date();
  const time = date.toString();

  return (
    <div className="time">
      <h3>Current Time</h3>
      <p>{time}</p>
    </div>
  )
};

export default Time;