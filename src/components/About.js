import profilePic from "../assets/profilePic.jpeg";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";

const About = () => {
  return (
    <section className="about">
      <div className="flexContainer">
        <div className="imgContainer">
          <img src={profilePic} alt="me" />
        <div className="socialAccContainer">
          {/* github, twitter and linkedin logo linked*/}
          <ul>
            <li>
              <a href="https://github.com/luu-jennifer" target="_blank" rel="noreferrer"><img src={github} alt="GitHub logo" /></a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jenCodes" target="_blank" rel="noreferrer"><img src={linkedIn} alt="LinkedIn logo" /></a>
            </li>
            <li>
              <a href="https://twitter.com/jenCodes" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter logo" /></a>
            </li>
          </ul>
        </div>
        </div>
        <div className="aboutContainer">
          <h2>About the Developer//</h2>
          <p>
            Hi, I'm Jen. I'm a front-end developer. I recently graduated from Juno College of Technology. I'm passionate about creating beautiful and functional web applications. I'm currently looking for new opportunities to learn and grow. If you're interested in working with me, please reach out to me on social media.
          </p>
          <h2>About the App//</h2>
            <h3 className="brand">Thinker</h3>
          <p>
            Thinker is a simple app that allows users to share their thoughts with the world. Users can type in their thoughts and click the button to share them with the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
