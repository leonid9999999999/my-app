import logo from '../../../resources/images/ima1logo.png';
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
        <div className="header__link">Work</div>
        <div className="header__button">Contact Us</div>
      </div>
  </div>
  );
}

export default Header;
