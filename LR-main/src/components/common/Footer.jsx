import "../../styles/Footer.css";
import logo1 from '../../assets/Home/logo1.png'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {

  return (
    <footer className="footer">
      {/* Top Header Section */}
      <div className="footer-top-head">
        <div className="marquee">
          <h1>LET'S CONNECT L&R GREEN INDIA</h1>
          <h1>LET'S CONNECT L&R GREEN INDIA</h1>
          <h1>LET'S CONNECT L&R GREEN INDIA</h1>
        </div>
        <div className="footer-divider" />
      </div>

      {/* Main Content / Columns */}
      <div className="footer-content">
        {/* Col 1: Brand & Social */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <img src={logo1} alt="logo" />
          </div>
          <p className="footer-desc">
            L &amp; R Enterprises - Manufacturer of prefabricated structure, mild steel container &amp; prefabricated cabin since 2015 in New Delhi, Delhi.
          </p>
          <div className="footer-social">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#linkedin" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Col 2: Info */}
        <div className="footer-col">
          <h4>Info</h4>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Products</p>
          <p>Gallery</p>
          <p>Brochure</p>
          <p>Contact US</p>
        </div>

        {/* Col 3: Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <p>Privacy policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Travel Policy</p>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col contact-col">
          <h4>Contact Info</h4>
          <p className="contact-text">L &amp; R Enterprises</p>
          <p className="contact-text">+91 8595351363 ; 9758813668</p>
          <p className="contact-text">Info.Lr1995@gmail.Com</p>
          <p className="contact-text">07CLKPG8942A1Z5</p>
          <p className="contact-text">216/2, Gautam Nagar, Gulmohar Enclave, <br /> New Delhi-110049, Delhi, India</p>
        </div>

        {/* Col 5: Help */}
        <div className="footer-col">
          <h4>Help</h4>
          <p>Support</p>
          <p>FAQs</p>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>© Copyright 2026 L &amp; R Enterprises All Rights Reserved.</p>
        <p>Designed &amp; Developed By Yuvocreations.com</p>
      </div>
    </footer>
  );
};

export default Footer;