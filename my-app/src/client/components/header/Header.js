import logo from '../../../resources/images/ima1logo.png';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './header.css';


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const goToServices = () => {
    navigate("/home", { state: { scrollTo: "services" } });
    
  };
  const goToProcess = () => {
    navigate("/home", { state: { scrollTo: "process" } });

  };

  return (
    <div className="header">
      

        <Link to="home" className="Logo"> 
          <img alt="logo" src={logo}/>
        </Link>


      <div className="header__nav">
        <div onClick={goToServices}>
          <Link  className="header__link">
            Services
          </Link>
        </div>
        <div onClick={goToProcess} className="header__link">Process</div>
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
