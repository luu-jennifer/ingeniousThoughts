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

// TODO:
// 1. Update meta data and favicon. Figure out manifest.json and robots.txt
// 2. Axios is already installed. Use it to fetch data from the API and display it on the page. Either images, giphy or thoughts/jokes
// 3. Style all the buttons in tyopgraphy.scss and delete button styles from all other partials
// 4. create function for alert fill in thought
