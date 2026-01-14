import logo from '../../../resources/images/ima1logo.png';
import { Link } from "react-router-dom";
import './header.css';


function Header() {
  return (
    <div className="header">
      <div className="Logo">
        <img alt="logo" src={logo} />
      </div>

      <div className="header__nav">
        <div className="header__link">Services</div>
        <div className="header__link">Process</div>
        <Link to="/ourPortfolio" className="header__link">
          Work
        </Link>
        <div className="header__button">Contact Us</div>
      </div>
  </div>
  );
}

export default Header;
