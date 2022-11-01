import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";


// /*Light Mode and Dark Mode Toggle
//   -create a function to get local storage theme value and set it to a variable
const getStorageMode = () => {
  //   -let the default theme be light
  let mode = 'lightMode';
  if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode');
  }
  return mode;
};


function App() {
  
  //   -create state variable to store the theme
  const [mode, setMode] = useState(getStorageMode());
  
  //   -create a function to toggle the theme
  const toggleMode = () => {
    //     -if the theme is dark, set the localStorage theme to dark
    if (mode === 'lightMode') {
      setMode('darkMode');
      //     -else the theme is light, set the localStorage theme to light
    } else {
      setMode('lightMode');
    }
  };
  
  //     -use the useEffect hook to set the theme
  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div className="App">
      <nav>
      <div className="logo">
        <h2>Thinker</h2>
      </div>
        <div className="navContainer">
          <ul>
            {/* create router and route */}
            <li className="about"><a href="">About</a></li>
            <li className="help"><a href="">Help</a></li>
            <li>
            {/* //   -create a toggle button to toggle the theme on click */}
              <button className="toggleMode" onClick={toggleMode}>
                {
                  //write ternary operator to toggle the button text
                  mode === 'lightMode' ? 'Dark Mode' : 'Light Mode'
                }
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Header />
      <Main mode={mode} />
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
// 10. Add Dark Mode and default to visitor's preference
