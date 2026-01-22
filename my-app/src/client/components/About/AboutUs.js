import "./AboutUs.css";
import { useEffect, useState, useRef } from "react";
import founder from "../../../resources/images/me.png";
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

  if (sloganRef.current) {
    observer.observe(sloganRef.current);
  }

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
        <p>
          <div className="hero-divider" />
          A small, focused web studio at an early stage of its journey. We value clear communication, honest work, and long-term relationships built on trust.
        </p>
      </section>

      {/* ABOUT COMPANY */}
      <section className="about-company fade-up">
        <div className="about-company__inner">
          
          <div className="about-company__logo">
            <img src={logo} alt="VB Secure Software Solutions logo" />
          </div>

          <div>
            
            <h2>About the Company</h2>
                <p>
                  We are a small team focused on building a clear and trustworthy presence.
                  Our priority is not scale, but the quality of our work and our reputation.
                </p>

                <hr />

                <p>
                  Our pricing is deliberately kept accessible.
                  This allows clients to move forward with confidence and allows us to grow through real, hands-on projects.
                </p>

                <hr />

                <p>
                  Long-term trust is built through consistent results and honest feedback.
                  Without satisfied clients, there is no sustainable future — and we take that seriously.
                </p>

                <hr />

                <div className="company-highlight">
                  We don’t sell promises. We focus on doing the work well and letting the results speak.
                </div>

          </div>
          </div>
      </section>

      {/* FOUNDER (CONTENT UNCHANGED) */}
      <section className="about-founder fade-up">
        <div className="about-founder__image">
          <img src={founder} alt="Leonid Vishnevsky" />
        </div>

        <div className="about-founder__content">
          <h2>Founder</h2>
            <h3>Leonid Vishnevsky</h3>

            <p>
              VB Secure Software Solutions officially began its work in January 2026.
            </p>

            <p>
              Prior to that, I worked independently, completed several small client
              projects, and gained hands-on experience through real-world work.
              Over time, it became clear that this could grow into a dedicated company,
              rather than remain freelance practice.
            </p>

            <p>
              We are at the beginning of our journey, focused on quality, transparency,
              and building a strong reputation step by step.
            </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline fade-up">
        <h2>Our Journey</h2>

        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-year">2019 – 2023</span>
            <p>
              First steps into the IT industry. Learning web technologies,
              development fundamentals, and modern design principles.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2025</span>
            <p>
              First real client projects. Around three completed orders
              that confirmed the idea of turning this into a business.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2026</span>
            <p>
              Official launch of VB Secure Software Solutions.
              A new path with clear goals, responsibility, and long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-why fade-up">
        <h2>Why We Work This Way</h2>

        <div className="about-why__grid">
          <div className="about-card">
            <h4>Reasonable Pricing</h4>
            <p>
              Our prices are intentionally accessible.
              Right now, our priority is experience, trust,
              and a solid portfolio - not fast profit.
            </p>
          </div>

          <div className="about-card">
            <h4>Clear Communication</h4>
            <p>
              We explain decisions, listen to feedback,
              and keep the process transparent from start to finish.
            </p>
          </div>

          <div className="about-card">
            <h4>Long-Term Thinking</h4>
            <p>
              We are building a company, not just completing tasks.
              Every project matters for our future reputation.
            </p>
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
