import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./main.css";

import logo from "../../../resources/images/ima1logo.png";

import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";
import OurProcess from "../ourprocess/OurProcess";
import SelectedWork from "../selectedwork/SelectedWork";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";
import ReadyToStart from "../ReadyToStart/ReadyToStart";
import MainPageServices from "../services/mainPageServices/mainPageServices";

function Main() {
  const location = useLocation();
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "services") {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (location.state?.scrollTo === "process") {
      processRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
        rotateX(${-y * 10}deg)
        rotateY(${x * 12}deg)
      `;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="main">

      <div className="main__hero">
        <div className="main__background" />

        <div className="hero-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="main__content">
          <h1 className="main__title">
            Professional Web Design <br />
            <span>& Development</span>
          </h1>

          <p className="main__subtitle">
            We don’t just build websites.<br />
            We create digital products that help businesses grow.
          </p>

          {/* 🔥 ВОТ ГЛАВНОЕ ИЗМЕНЕНИЕ */}
          <Link to="/ContactUs" className="main__button">
            Start Your Project
          </Link>
        </div>
      </div>

      <WhyWorkWithUs />

      <div ref={servicesRef}>
        <MainPageServices />
      </div>

      <div ref={processRef}>
        <OurProcess />
      </div>
      {/* <SelectedWork /> */}
      <ClientTestimonials />
      <ReadyToStart />
    </div>
  );
}

export default Main;