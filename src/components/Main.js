import StoredThoughts from "./StoredThoughts";
import ThoughtForm from "./ThoughtForm";

const Main = () => {
    //time variables
  const date = new Date();
  const time = date.toString();

  //create a userID based on local storage and pass prop to the main component then pass props to thoughtForm

  //create a userID based on local storage and pass prop to the
  //main component then pass props to thoughtForm
  const userID = localStorage.getItem("userID");
  console.log("userID", userID);
  

  return (
    <div className="main">
      <main>
        <ThoughtForm 
          time={time}  
          userID={userID}/>

        <StoredThoughts 
          time={time} />

      </main>
    </div>
  );
}

export default Main;