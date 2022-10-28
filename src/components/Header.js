import "../partials/_header.scss";
import About from "./About";
import Weather from "./Weather";

const Header = () => {
  return (
    <header>
      <Weather />
      <h1>🧐🤔 Ingenious Thoughts 🧠💭</h1>
      <About />
    </header>
  );
}

export default Header;