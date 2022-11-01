import profilePic from "../assets/profilePic.jpeg";
import github from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";

const About = () => {

  return (
    // TODO: add img of me and about me

    <section className="about">
      <div className="flexContainer">
        <div className="imgContainer">
          <img src={profilePic} alt="me" />
        <div className="socialAccContainer">
          {/* github, twitter and linkedin */}
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
        <div className="contentContainer">
          <h2>About the Developer</h2>
          <p>
            Hi, I'm Jen. I'm a full-stack developer and designer. I recently graduated from Juno College of Technology. I'm passionate about creating beautiful and functional web applications. I'm also passionate about learning and growing as a developer. I'm always looking for new opportunities to learn and grow. I'm currently looking for a junior developer role. If you're interested in working with me, please reach out to me via email or social media.
          </p>
          <h2>About the App// <span className="logo">Thinker</span></h2>
          <p>
            Thinker is a simple app that allows users to share their thoughts with the world. Users can type in their thoughts and click the button to share them with the world. Users can also delete their thoughts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
