import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";

const Main = () => {
  return (
    <div className="main">
      <main>
        <ThoughtForm />
        <StoredThoughts />
      </main>
    </div>
  );
}

export default Main;