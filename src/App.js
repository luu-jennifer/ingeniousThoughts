import "./App.css";
import { 
  NavLink,
  Routes, 
  Route 
} from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Help from "./components/Help";
import User from "./components/User";

import darkMode from "./assets/darkMode.gif"
import lightMode from "./assets/lightMode.gif"

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
          <NavLink to="/">
              <h2>Thinker</h2>
          </NavLink>
        </div>
        <div className="navContainer">
          <ul>
            {/* create router and route */}
            <li className="about navLink"><NavLink to="/about">About</NavLink></li>
            <li className="help navLink"><NavLink to="/help">Help</NavLink></li>
            <li>
            {/* //   -create a toggle button to toggle the theme on click */}
              <button className="toggleMode" onClick={toggleMode}>
                {
                  //write ternary operator to toggle the button text
                  mode === 'lightMode' 
                    //render moon
                    ? <img src={darkMode} alt="moon for dark mode page theme" className="moonMode" />
                    //render sun
                    : <img src={lightMode} alt="sun for light mode page theme" className="sunMode" />
                }
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Create routes for About, Help, users */}
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/thinker/:userId" element={<User />} />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;

