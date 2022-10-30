import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";

const Main = (props) => {
  return (
    <div className="main">
      <main>
        <ThoughtForm time={props.time} />
        <StoredThoughts time={props.time} />
      </main>
    </div>
  );
}

export default Main;