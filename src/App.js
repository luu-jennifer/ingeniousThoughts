import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;


//TODO:
// 1. Add a form to the Optional component to allow the user to enter a city and get the temperature for that city.
// 2. *****Working 2 ***Add a form to the Optional component to allow the user to enter a thought and get the details for that thought.
        //2.1. Create Accordian effect for the thought details to show and hide
// 3. FIXME: Update FavoriteCount styles and functionality to start at stored value
// 4. FIXME: button sizing for mobile
// 6. update metadata and favicon
// 7. update readme
// 8. Add logic to form to add an image from API to the thought
// 9. ***Working 3****create an userId for each thought where ID is equal to the used LocalStorage ID
// 10. Add Dark Mode and default to visitor's preference
