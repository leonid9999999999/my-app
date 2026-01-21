import logo from '../../../resources/images/ima1logo.png';
import { Link } from "react-router-dom";
import './header.css';


function Header() {
  return (
    <div className="header">
      

        <Link to="home" className="Logo"> 
          <img alt="logo" src={logo}/>
        </Link>


      <div className="header__nav">
        
        <Link to="ourServices" className="header__link"> 
          Services
        </Link>
        <div className="header__link">Process</div>
        <Link to="/ourPortfolio" className="header__link">
          Work
        </Link>
        <Link to="ContactUs" className='header__link'>
        <div className="header__button">Contact Us</div>
        </Link>
      </div>
  </div>
  );
}

export default Header;
