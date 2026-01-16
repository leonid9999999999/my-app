import { useEffect } from "react";
import "./main.css";

import Intro from "../Intro/Intro";
import Header from "../header/Header";
import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";
import OurProcess from "../ourprocess/OurProcess";
import SelectedWork from "../selectedwork/SelectedWork";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";
import ReadyToStart from "../ReadyToStart/ReadyToStart";
import Footer from "../Footer/Footer";

import logo from "../../../resources/images/ima1logo.png";
import MainPageServices from "../services/mainPageServices/mainPageServices";

function Main() {

  useEffect(() => {
    const hero = document.querySelector(".main__hero");
    const logoEl = document.querySelector(".hero-logo");

    if (!hero || !logoEl) return;

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      logoEl.style.transform = `
  translate(-50%, -50%)
  rotateX(${ -y * 10 }deg)
  rotateY(${ x * 12 }deg)
`;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="main">
      
      {/* <Intro /> */}

      <div className="main__hero">
        <div className="main__background"></div>

        {/* FAKE 3D LOGO */}
        <div className="hero-logo">
  <img src={logo} alt="logo" />
  <div className="hero-logo__glow"></div>
</div>

        <div className="main__content">
          <h1 className="main__title">
            Professional Web Design
            <br />
            <span>& Development</span>
          </h1>

          <p className="main__subtitle">
            We don’t just build websites.
            <br />
            We create digital products that help businesses grow.
          </p>

          <div className="main__button">
            Start Your Project
          </div>
        </div>
      </div>

      <WhyWorkWithUs />
      <MainPageServices/>
      <OurProcess />
      <SelectedWork />
      <ClientTestimonials />
      <ReadyToStart />
      <Footer />
    </div>
  );
}

export default Main;
