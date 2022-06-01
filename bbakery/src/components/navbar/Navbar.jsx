import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  //UseState
  const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);

  //Function
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navContainer}>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.menu}
            onClick={() => {
              toggleMenu();
            }}
          />
          <span className={styles.logo}>BB.</span>
          <FontAwesomeIcon icon={faBagShopping} className={styles.bag} />
        </div>
        {showMenu && <NavDrop></NavDrop>}
      </div>
    </nav>
  );
};

const NavDrop = () => {
  return (
    <div className={styles.navDrop}>
      <NavLink to="/" className={styles.link}>
        About Us
      </NavLink>
      <NavLink to="/" className={styles.link}>
        Shop
      </NavLink>
      <NavLink to="/" className={styles.link}>
        Our Fav Products
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
