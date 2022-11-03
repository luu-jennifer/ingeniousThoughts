import { NavLink } from "react-router-dom";

import darkMode from "../assets/darkMode.gif"
import lightMode from "../assets/lightMode.gif"

const Nav = (props) => {
  return(
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
            <button className="toggleMode" onClick={props.toggleMode}>
              {
                //write ternary operator to toggle the button text
                props.mode === 'lightMode' 
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
  )
};

export default Nav;