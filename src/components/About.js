import { useState } from "react";


const About = () => {
  //initial state is false
  const [showAbout, setShowAbout] = useState(false);

  //toggle the state
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="about">
      <button onClick={toggleAbout}>
        {
          showAbout 
            ? "Help me, I'm lost!" 
            : "What is this?"
            } 
      </button>
      <h3>
        {
          showAbout
            ? "Ingenious Thoughts is a place to share your thoughts and ideas. It's a place to be inspired by others. It's a place to be inspired by yourself."
            : "Type in your thoughts and click the button to share them with the world."
        }
      </h3>
    </div>
  );
}

export default About;