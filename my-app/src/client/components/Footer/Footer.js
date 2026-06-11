import "./Footer.css";
import logo from "../../../resources/images/ima1logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="VB Secure Solutions" />
          </div>

          <p className="footer__description">
            We design and build high-performance websites for ambitious
            businesses across the United Kingdom.
          </p>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Services</h4>

          <ul className="footer__list">
            <li>Web Design</li>
            <li>Web Development</li>
            <li>E-Commerce</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Company</h4>

          <ul className="footer__list">
            <li>
              <Link to="/About">About Us</Link>
            </li>

            <li>
              <Link to="/ourPortfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/ContactUs">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h4 className="footer__title">Contact</h4>

          <ul className="footer__list">
            <li>vbsecuresolutions@gmail.com</li>
            <li>Cardiff, United Kingdom</li>
            <li>+44 73 0840 5339</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <span>© 2026 VB Secure Solutions. All rights reserved.</span>

        <div className="footer__links">
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;