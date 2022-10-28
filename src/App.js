import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

// TODO:
// 1. Update meta data and favicon. Figure out manifest.json and robots.txt
// 2. Axios is already installed. Use it to fetch data from the API and display it on the page. Either images, giphy or reddit thoughts
// 3. Add a button to the About component that will toggle the About component to display or not display
// 4. Style all the buttons in tyopgraphy.scss and delete button styles from all other partials
