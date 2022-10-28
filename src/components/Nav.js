import { useState } from "react";

const Nav = () => {
  //initial state is false
  const [showAbout, setShowAbout] = useState(false);

  //toggle the state
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <nav>
      <div className="help">
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
      </div>
    </nav>
  );
}

export default Nav;