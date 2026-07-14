import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Header Section */}
      <div className="footer-top-head">
        <h1>LET’S CONNECT L&amp;R GREEN INDIA</h1>
        <div className="footer-divider" />
      </div>

      {/* Main Content / Columns */}
      <div className="footer-content">
        {/* Col 1: Brand & Social */}
        <div className="footer-brand">
          <div className="footer-logo-row">
            <div className="footer-logo-wrapper">
              <svg className="footer-svg-logo" width="46" height="46" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 24C6 14.06 14.06 6 24 6c4.5 0 8.58 1.66 11.7 4.4" stroke="#2b6cb0" strokeWidth="3.5" strokeLinecap="round"/>
                <path d="M42 24c0 9.94-8.06 18-18 18-4.5 0-8.58-1.66-11.7-4.4" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round"/>
                <text x="24" y="31" textAnchor="middle" fill="#ffffff" fontSize="20px" fontFamily="sans-serif" fontWeight="900">LR</text>
              </svg>
            </div>
            <h2>L &amp; R Enterprises</h2>
          </div>
          <p className="footer-desc">
            L &amp; R Enterprises - Manufacturer of prefabricated structure, mild steel container &amp; prefabricated cabin since 2015 in New Delhi, Delhi.
          </p>
          <div className="footer-social">
            <a href="#fb" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.65l.35-4H14V7a1 1 0 0 1 1-1h3V2z"/>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
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
          <p className="contact-text">216/2, Gautam Nagar, Gulmohar Enclave, New Delhi-110049, Delhi, India</p>
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