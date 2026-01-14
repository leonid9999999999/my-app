import "./Footer.css";
import logo from '../../../resources/images/ima1logo.png';

// import logo from "../../assets/logo.png"; ← ЕСЛИ будешь импортировать как модуль

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LEFT */}
        <div className="footer__brand">
            <div className="Logo">
                <img alt="logo" src={logo} />
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
            <li>About Us</li>
            <li>Our Work</li>
            <li>Process</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer__column">
          <h4 className="footer__title">Contact</h4>
          <ul className="footer__list footer__list--contact">
            <li>
              <span>✉</span> hello@yourcompany.co.uk
            </li>
            <li>
              <span>📍</span> Cardiff, United Kingdom
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <span>© 2024 WebDev Pro. All rights reserved.</span>

        <div className="footer__links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
