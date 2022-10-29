import "../partials/_header.scss";
import Time from "./Time";
// import Weather from "./Weather";

const Header = () => {
  return (
    <header>
      {/* <Weather /> */}
      <h1>Ingenious Thoughts 💭</h1>
      <Time />
    </header>
  );
}

export default Header;