import Header from "./Header";
import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";


const Home = (props) => {
    //time variables
  const date = new Date();
  const time = date.toString();

  return (
    <div className="Home">
      <Header />
      <main>
        <ThoughtForm passedTime={time} mode={props.mode} />
        <StoredThoughts passedTime={time} />
      </main>
    </div>
  );
}

export default Home;