import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {
  //time variables
  const date = new Date();
  const time = date.toString();

  //create a userID based on local storage and pass prop to the main component then pass props to thoughtForm


  return (
    <div className="App">
      <Nav />
      <Header />
      <Main time={time}/>
      <Footer />
    </div>
  );
}

export default App;


//TODO:
// 1. Add a form to the Optional component to allow the user to enter a city and get the temperature for that city.
// 2. Add a form to the Optional component to allow the user to enter a thought and get the details for that thought.
// 3. FIXME: Update FavoriteCount styles and functionality
// 4. FIXME: Update ThoughtList styles
// 5. FIXME: create function for alert fill in thought
// 6. update metadata and favicon
