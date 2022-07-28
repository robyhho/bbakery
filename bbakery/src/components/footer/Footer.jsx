import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer>
      <section className={styles.contact}>
        <h2>Contact</h2>
        <ul>
          <li
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </li>
          <li>FAQ</li>
        </ul>
      </section>
      <section className={styles.shop}>
        <h2>Shop</h2>
        <ul>
          <li>Catering</li>
          <li>Delivery</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section className={styles.social}>
        <h2>Social</h2>
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
      <section className={styles.newsletter}>
        <h2>Newsletter</h2>
        <input type="text" placeholder="Email:" />
        <button>Subscribe</button>
      </section>
    </footer>
  );
};

export default Footer;
