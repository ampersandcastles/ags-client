import "./Navbar.css";
import hopLogo from "../../assets/hop-no-text.png";

const Navbar = (props) => {
  return (
    <div>
      <nav>
        <img id="hopLogo" src={hopLogo} alt="House of Pain" />
      </nav>
    </div>
  );
};

export default Navbar;
