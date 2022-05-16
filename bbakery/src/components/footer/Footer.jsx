import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </section>
      <section className="shop">
        <h2>Shop</h2>
        <ul>
          <li>Catering</li>
          <li>Delivery</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section className="social">
        <h2>Social</h2>
        <div className="icon-container">
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="brand-icon"
              ></FontAwesomeIcon>
            </li>
            <li className="twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                className="brand-icon"
              ></FontAwesomeIcon>
            </li>
            <li className="facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                className="brand-icon"
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </section>
      <section className="newsletter">
        <h2>Newsletter</h2>
        <input type="text" placeholder="Email:" />
        <button>Subscribe</button>
      </section>
    </footer>
  );
};

export default Footer;
