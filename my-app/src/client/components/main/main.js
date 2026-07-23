import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./main.css";

import logo from "../../../resources/images/ima1logo.png";

import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";
import OurProcess from "../ourprocess/OurProcess";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";
import ReadyToStart from "../ReadyToStart/ReadyToStart";
import MainPageServices from "../services/mainPageServices/mainPageServices";

function Main() {
  const location = useLocation();

  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollTo === "services") {
      servicesRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (location.state?.scrollTo === "process") {
      processRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="main">

      <section className="main__hero">

        <div className="main__background"></div>

        <div className="main__overlay"></div>

        <div className="main__content">

          <div className="hero-logo">
            <img src={logo} alt="VB Secure Software Solutions" />
          </div>

          <h1 className="main__title">
            Professional Web Design
            <span>& Development</span>
          </h1>

          <p className="main__subtitle">
            We don’t just build websites.
            <br />
            We create digital products that help businesses grow.
          </p>

          <Link
            to="/ContactUs"
            className="main__button"
          >
            Start Your Project
          </Link>

        </div>

      </section>

      <WhyWorkWithUs />

      <div ref={servicesRef}>
        <MainPageServices />
      </div>

      <div ref={processRef}>
        <OurProcess />
      </div>

      <ClientTestimonials />

      <ReadyToStart />

    </div>
  );
}

export default Main;