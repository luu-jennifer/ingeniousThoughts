import { useState, useEffect } from "react";


// /*Light Mode and Dark Mode Toggle
//   -create a function to get local storage theme value and set it to a variable
//   -let the default theme be light
//     -if the theme is dark, set the localStorage theme to dark
//     -if the theme is light, set the localStorage theme to light
//   -create a function to toggle the theme
//   -create state variable to store the theme
//   -create a function to set the theme
//     -use the useEffect hook to set the theme
//   -create a toggle button to toggle the theme on click

const getStorageMode = () => {
  let mode = 'lightMode';
  if (localStorage.getItem('mode')) {
    mode = localStorage.getItem('mode');
  }
  return mode;
};

const Nav = (props) => {

const [mode, setMode] = useState(getStorageMode());

const toggleMode = () => {
  if (mode === 'lightMode') {
    setMode('darkMode');
  } else {
    setMode('lightMode');
  }
};

  useEffect(() => {
    document.documentElement.className = mode;
    localStorage.setItem('mode', mode);
  }, [mode]);




  //initial state is false
  const [showAbout, setShowAbout] = useState(false);

  //toggle the state
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <nav>
      <div className="navContainer">
        <ul>
          <li>
            <button onClick={toggleAbout}>
              {
                showAbout 
                ? "X" 
                : "Help"
              } 
            </button>
            <p>
              {
                showAbout
                ? "Type in your thought and click the button to share them with the world."
                : ""
              }
            </p>            
          </li>
          <li>
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
  );
}

export default Nav;