// import Weather from "./Weather";

const Time = () => {
  const date = new Date();
  const time = date.toString();

  return (
    <div className="time">
      <h3>Local Time</h3>
      <p>{time}</p>
    </div>
  )
};

export default Time;