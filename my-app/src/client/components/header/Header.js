import React, { useState, useEffect } from 'react';
import logo from '../../../resources/images/ima1logo.png';
import { Link, useNavigate } from "react-router-dom";
import './header.css';


function Header() {

  const navigate = useNavigate();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);



  /*
  =========================
  SCROLL PROGRESS
  =========================
  */

  useEffect(() => {


    const app = document.querySelector(".App");


    const updateScrollProgress = () => {


      if (!app) return;


      const scrollHeight =
        app.scrollHeight - app.clientHeight;


      const currentScroll =
        app.scrollTop;



      const progress =
        scrollHeight > 0
          ? (currentScroll / scrollHeight) * 100
          : 0;



      setScrollProgress(progress);


    };



    if(app){


      app.addEventListener(
        "scroll",
        updateScrollProgress,
        {
          passive:true
        }
      );


      updateScrollProgress();


    }




    return () => {


      if(app){


        app.removeEventListener(
          "scroll",
          updateScrollProgress
        );


      }


    };



  }, []);





  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);

  };



  const closeMenu = () => {

    setIsMenuOpen(false);

  };





  const goToServices = () => {

    closeMenu();

    navigate("/home", {

      state:{
        scrollTo:"services"
      }

    });

  };




  const goAboutUs = () => {


    closeMenu();


    navigate("/about", {

      state:{
        scrollTo:"about"
      }

    });


  };




  const goToProcess = () => {


    closeMenu();


    navigate("/home", {

      state:{
        scrollTo:"process"
      }

    });


  };




  const goToPrices = () => {


    closeMenu();


    navigate("Pricetags", {

      state:{
        scrollTo:"OurBundles"
      }

    });


  };






  return (

    <header className="header">



      {/* =========================
          SCROLL PROGRESS
      ========================= */}


      <div className="scroll-progress">


        <span

          style={{

            transform:
              `scaleX(${scrollProgress / 100})`

          }}

        />


      </div>





      <Link

        to="/home"

        className="Logo"

        onClick={closeMenu}

      >


        <img

          alt="logo"

          src={logo}

        />


      </Link>






      <button

        className={

          `header__burger ${
            isMenuOpen ? 'is-open' : ''
          }`

        }

        onClick={toggleMenu}

        aria-label="Toggle menu"

      >


        <span></span>

        <span></span>

        <span></span>


      </button>






      <nav


        className={

          `header__nav ${
            isMenuOpen ? 'is-open' : ''
          }`

        }


      >



        <Link

          to="/home"

          className="header__link"

          onClick={closeMenu}

        >

          Home

        </Link>





        <div

          onClick={goAboutUs}

          className="header__link"

        >

          About Us

        </div>






        <div

          onClick={goToServices}

          className="header__link"

        >

          Services

        </div>






        <div

          onClick={goToProcess}

          className="header__link"

        >

          Process

        </div>






        <Link

          to="/ourPortfolio"

          className="header__link"

          onClick={closeMenu}

        >

          Work

        </Link>






        <div

          onClick={goToPrices}

          className="header__link"

        >

          Prices

        </div>








        <Link


          to="/ContactUs"

          onClick={closeMenu}

          style={{

            textDecoration:"none"

          }}


        >



          <div className="header__button">


            Contact Us


          </div>



        </Link>





      </nav>



    </header>

  );


}


export default Header;