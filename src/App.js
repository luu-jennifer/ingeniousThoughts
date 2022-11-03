import "./App.css";
import { 
  Routes, 
  Route 
} from 'react-router-dom';
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Help from "./components/Help";
import User from "./components/User";
import Nav from "./components/Nav"

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
      <Nav toggleMode={toggleMode} mode={mode} />
      
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

