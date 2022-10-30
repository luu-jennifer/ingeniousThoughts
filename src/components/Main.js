import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";


const Main = () => {
    //time variables
  const date = new Date();
  const time = date.toString();

  return (
    <div className="main">
      <main>
        <ThoughtForm time={time} />
        <StoredThoughts time={time} />
      </main>
    </div>
  );
}

export default Main;