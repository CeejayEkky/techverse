import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>TechVerse</h2>
          <p>
            Bringing you the latest technology, premium gadgets and smart
            accessories.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Lagos, Nigeria</p>
          <p>support@techverse.com</p>
          <p>+234 9074614559</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        © {new Date().getFullYear()} TechVerse. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
