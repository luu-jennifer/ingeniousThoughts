import { useState } from "react";

const Help = () => {
  //initial state is false
  const [showAbout, setShowAbout] = useState(false);

  //toggle the state
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <nav className="help">
      <button onClick={toggleAbout}>
        {
          showAbout 
            ? "X" 
            : "Help"
            } 
      </button>
      <h3>
        {
          showAbout
            ? "Type in your thoughts and click the button to share them with the world."
            : ""
        }
      </h3>
    </nav>
  );
}

export default Help;