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
// 2. Add a form to the Optional component to allow the user to enter a thought and get the details for that thought.
// 3. FIXME: Update FavoriteCount styles and functionality to start at stored value
// 4. FIXME: button sizing for mobile
// 6. update metadata and favicon
// 7. update readme
// 8. Add logic to form to add an image to the thought
