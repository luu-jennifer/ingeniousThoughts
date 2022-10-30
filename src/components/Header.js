import "../partials/_header.scss";
import Weather from "./apis/Weather";

const Header = () => {
  return (
    <header>
      <h1>I have thoughts... 💭</h1>
      <Weather />
    </header>
  );
}

export default Header;