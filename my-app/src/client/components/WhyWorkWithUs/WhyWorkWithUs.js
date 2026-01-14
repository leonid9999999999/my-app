import './WhyWorkWithUs.css';
import { useEffect } from 'react';

function WhyWorkWithUs() {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0; // получаем задержку
            setTimeout(() => {
              entry.target.classList.add('show');
            }, delay);
            observer.unobserve(entry.target); // анимация один раз
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="why">
      <h2 className="why__title fade-in" data-delay="0">Why Work With Us</h2>

      <p className="why__subtitle fade-in" data-delay="100">
        We deliver professional web solutions that help businesses grow and succeed online.
      </p>

      <div className="why__cards">

        <div className="why__card fade-in" data-delay="200">
          <div className="why__icon">{`</>`}</div>
          <h3>Custom Solutions</h3>
          <p>
            Bespoke development tailored to your business needs.
            No templates, no shortcuts.
          </p>
        </div>

        <div className="why__card fade-in" data-delay="400">
          <div className="why__icon">◎</div>
          <h3>Business-Focused</h3>
          <p>
            We prioritise results and ROI.
            Every decision is driven by your business objectives.
          </p>
        </div>

        <div className="why__card fade-in" data-delay="600">
          <div className="why__icon">⚡</div>
          <h3>Modern Technology</h3>
          <p>
            Built with the latest frameworks and best practices
            for performance and scalability.
          </p>
        </div>

        <div className="why__card fade-in" data-delay="800">
          <div className="why__icon">💬</div>
          <h3>Clear Communication</h3>
          <p>
            Transparent processes, regular updates,
            and reliable delivery timelines.
          </p>
        </div>

        <div className="why__card fade-in" data-delay="1000">
          <div className="why__icon">🔒</div>
          <h3>Security & Reliability</h3>
          <p>
            We follow best security practices to protect your data
            and ensure your site is always reliable.
          </p>
        </div>

      </div>
    </div>
  );
}

export default WhyWorkWithUs;
