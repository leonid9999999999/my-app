import "./AboutUs.css";
import { useEffect, useState, useRef } from "react";

import founder from "../../../resources/images/me.png";
import TeamMember from "../../../resources/images/Timo.png";
import logo from "../../../resources/images/imalogo.png";

function AboutUs() {
  /* ===== SCROLL ANIMATION ===== */
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===== TYPEWRITER ===== */
  const sloganText = "We build trust first - everything else follows.";
  const [text, setText] = useState("");
  const sloganRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sloganRef.current) observer.observe(sloganRef.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (text.length < sloganText.length) {
      const timeout = setTimeout(() => {
        setText(sloganText.slice(0, text.length + 1));
      }, 60);

      return () => clearTimeout(timeout);
    }
  }, [text, started, sloganText]);

  return (
    <main className="about">

      {/* HERO */}
      <section className="about-hero fade-up">
        <h1>About Us</h1>

        <div className="hero-divider" />

        <p>
          A small, focused web studio at an early stage of its journey.
          We value clear communication, honest work, and long-term relationships built on trust.
        </p>
      </section>

      {/* COMPANY */}
      <section className="about-company fade-up">
        <div className="about-company__inner">

          <div className="about-company__logo">
            <img src={logo} alt="logo" />
          </div>

          <div>
            <h2>About the Company</h2>

            <p>
              We are a small team focused on building a clear and trustworthy presence.
              Our priority is quality and reputation, not scale.
            </p>

            <hr />

            <p>
              Our pricing is accessible to help clients start confidently.
            </p>

            <hr />

            <p>
              Long-term trust is built through consistent results and honest feedback.
            </p>

            <hr />

            <div className="company-highlight">
              We don’t sell promises. We deliver results.
            </div>
          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="about-founder fade-up">
        <div className="about-founder__image">
          <img src={founder} alt="Founder" />
        </div>

        <div className="about-founder__content">
          <h2>Founder</h2>
          <h3>Leonid Vishnevsky</h3>

          <p>
            VB Secure Software Solutions began in January 2026.
          </p>

          <p>
            Before that, I worked on freelance projects and gained real experience.
          </p>

          <p>
            Now we focus on building a long-term company with strong reputation.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-founder fade-up">
        <div className="about-founder__image">
          <img src={TeamMember} alt="Team Member" />
        </div>

        <div className="about-founder__content">
          <h2>Team Member</h2>
          <h3>Timo Berkut</h3>

          <p>
            Timo is responsible for backend, architecture and system design.
          </p>

          <p>
            He plays a key role in technical decisions and infrastructure.
          </p>

          <p>
            His contribution shapes the foundation of the company.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline fade-up">
        <h2>Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2019 – 2023</span>
            <p>Learning web development fundamentals and design.</p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2025</span>
            <p>First real client projects and experience.</p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <p>Official launch of VB Secure Software Solutions.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-why fade-up">
        <h2>Why We Work This Way</h2>

        <div className="about-why__grid">

          <div className="about-card">
            <h4>Reasonable Pricing</h4>
            <p>We focus on growth and experience first.</p>
          </div>

          <div className="about-card">
            <h4>Clear Communication</h4>
            <p>Transparent process from start to finish.</p>
          </div>

          <div className="about-card">
            <h4>Long-Term Thinking</h4>
            <p>We build reputation, not just projects.</p>
          </div>

        </div>
      </section>

      {/* SLOGAN */}
      <section className="about-slogan" ref={sloganRef}>
        <div className="typewriter">
          {text}
          <span className="cursor" />
        </div>
      </section>

    </main>
  );
}

export default AboutUs;