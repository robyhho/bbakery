import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <FontAwesomeIcon icon={faBars} className="menu" />
        <span className="logo">BB.</span>
        <FontAwesomeIcon icon={faBagShopping} className="bag" />
      </div>
    </div>
  );
};

export default Navbar;
