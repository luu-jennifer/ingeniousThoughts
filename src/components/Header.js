import "../partials/_header.scss";
import thoughtCloud1 from "../assets/thoughtCloud1.gif";

const Header = () => {
  return (
    <header>
      <div className="imgContainer">
        <img src={thoughtCloud1} alt="an animated thought cloud" srcset="" />
      </div>
      <h1>I have thoughts</h1>      
    </header>
  );
}

export default Header;