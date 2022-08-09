import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";

const Navbar = () => {
  //UseState
  const [showMenu, setShowMenu] = useState(false);

  const { cartQuantity } = useShoppingCart();

  let navigate = useNavigate();

  //Function
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const routeChange = (path) => {
    navigate(path);
  };

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.leftSide}>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.menu}
              onClick={() => {
                toggleMenu();
              }}
            />
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
            </div>
            <div className="desktopContainer">
              <NavLink to="/aboutus" className={styles.navLink}>
                About Us
              </NavLink>
              <NavLink to="/shop" className={styles.navLink}>
                Shop
              </NavLink>
            </div>
          </div>
          <NavLink to="/" className={styles.logo}>
            BB.
          </NavLink>
          <div className={styles.rightSide}>
            <div className="emptyDiv"></div>
            <FontAwesomeIcon
              icon={faBagShopping}
              className={styles.bag}
              onClick={() => {
                routeChange("/checkout");
              }}
            />
            {cartQuantity > 0 && (
              <span className={styles.itemNum}>{cartQuantity}</span>
            )}
          </div>
        </div>
        {showMenu && <NavDrop></NavDrop>}
      </div>
    </nav>
  );
};

const NavDrop = () => {
  return (
    <div className={styles.navDrop}>
      <NavLink to="/aboutus" className={styles.link}>
        About Us
      </NavLink>
      <NavLink to="/shop" className={styles.link}>
        Shop
      </NavLink>
      <section className={styles.social}>
        <h2>Find us on: </h2>
        <div className={styles.iconContainer}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
            </li>
            <li className={styles.twitter}>
              <FontAwesomeIcon
                icon={faTwitter}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
            </li>
            <li className={styles.facebook}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.brandIcon}
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
