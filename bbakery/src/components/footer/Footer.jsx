import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="Contact">
        <h2>Contact</h2>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </section>
      <section className="Shop">
        <h2>Shop</h2>
        <ul>
          <li>Catering</li>
          <li>Delivery</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
      <section className="Social">
        <h2>Social</h2>
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </section>
      <section className="Newsletter">
        <h2>Newsletter</h2>
        <input type="text" />
        <button>Subscribe</button>
      </section>
    </footer>
  );
};

export default Footer;
