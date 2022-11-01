import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";


const Main = (props) => {
    //time variables
  const date = new Date();
  const time = date.toString();

  return (
    <div className="main">
      <main>
        <ThoughtForm passedTime={time} mode={props.mode} />
        <StoredThoughts passedTime={time} />
      </main>
    </div>
  );
}

export default Main;