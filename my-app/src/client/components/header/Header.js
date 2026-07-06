import React, { useState } from 'react';
import logo from '../../../resources/images/ima1logo.png';
import { Link, useNavigate} from "react-router-dom";
import './header.css';

function Header() {
  const navigate = useNavigate();

  // 1. Create a state to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 3. Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToServices = () => {
    closeMenu(); // Close menu on click
    navigate("/home", { state: { scrollTo: "services" } });
  };
  const goAboutUs = () => {
    closeMenu(); // Close menu on click
    navigate("/about", { state: { scrollTo: "about" } });
  };

  const goToProcess = () => {
    closeMenu(); // Close menu on click
    navigate("/home", { state: { scrollTo: "process" } });
  };
  const goToPrices = () => {
    closeMenu(); // Always close the burger menu
    navigate("/ourServices/0", { state: { scrollTo: "OurBundles" } });
  };
  


  return (
    <header className="header">
      <Link to="/home" className="Logo" onClick={closeMenu}>
        <img alt="logo" src={logo} />
      </Link>

      {/* 4. Add the Burger Button with dynamic class */}
      <button
        className={`header__burger ${isMenuOpen ? 'is-open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 5. Add dynamic class to the navigation container */}
      <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>

        {/* Changed from <div> wrapper to just using the Link/Div directly for cleaner markup */}
        <Link to="/home" className="header__link" onClick={closeMenu}>
          Home
        </Link>
        <div onClick={goAboutUs} className="header__link">
          About Us
        </div>
        <div onClick={goToServices} className="header__link">
          Services
        </div>

        <div onClick={goToProcess} className="header__link">
          Process
        </div>

        <Link to="/ourPortfolio" className="header__link" onClick={closeMenu}>
          Our Work
        </Link>

        <div onClick={goToPrices} className="header__link">
          Prices
        </div>

        {/* Removed nested div in Link, apply button styling directly or wrap properly */}
        <Link to="/ContactUs" onClick={closeMenu} style={{ textDecoration: 'none' }}>
          <div className="header__button">Contact Us</div>
        </Link>

      </nav>
    </header>
  );
}

export default Header;