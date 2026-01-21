import "./Footer.css";
import logo from "../../../resources/images/ima1logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* BRAND */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="VB Secure Solutions logo" />
          </div>

          <p className="footer__description">
            Professional web design and development services for businesses
            across the UK and EU.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer__column">
          <h4 className="footer__title">Services</h4>
          <ul className="footer__list">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>E-Commerce</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer__column">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/ourPortfolio">Our Work</Link></li>
            <li><Link to="/AboutUs">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer__column">
          <h4 className="footer__title">Contact</h4>
          <ul className="footer__list footer__list--contact">
            <li>vbsecuresolutions@gmail.com</li>
            <li>Cardiff, United Kingdom</li>
            <li>+44 89 0989 2641</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <span>© 2026 VB SECURE SOFTWARE SOLUTIONS</span>

        <div className="footer__links">
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
