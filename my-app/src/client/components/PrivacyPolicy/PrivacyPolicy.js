import { useEffect, useRef, useState } from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 800); // можно 500–1200ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="privacy">
      <article
        ref={ref}
        className={`privacy-paper ${active ? "active" : ""}`}
      >
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <span>Last updated: 2026</span>
        </header>

        <section>
          <p className="lead">
            This Privacy Policy describes how we collect, use, store, and protect
            personal information when you interact with our website and services.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect only necessary information to operate and improve our services.
          </p>

          <ul>
            <li><strong>Personal data</strong> like name and email.</li>
            <li><strong>Technical data</strong> like IP and device info.</li>
            <li><strong>Usage data</strong> like interactions and navigation.</li>
          </ul>
        </section>

        <section>
          <h2>2. Purpose of Processing</h2>
          <p>
            We use data to provide services, improve performance, ensure security
            and communicate with users.
          </p>
        </section>

        <section>
          <h2>3. Legal Basis</h2>
          <p>
            Processing is based on consent, contractual necessity, legal obligations
            and legitimate interests.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell data. We only share it with trusted service providers
            under strict confidentiality agreements.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Cookies help us improve functionality and analyze traffic. You can
            disable them in your browser settings.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We keep data only as long as necessary or required by law.
          </p>
        </section>

        <section>
          <h2>7. Security</h2>
          <p>
            We use industry-standard security measures to protect your data.
          </p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>
            You may access, modify or delete your data depending on applicable laws.
          </p>
        </section>

        <section>
          <h2>9. Updates</h2>
          <p>
            This policy may be updated. Changes will be posted here.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>Contact us at:</p>
          <p className="contact">vbsecuresolutions@gmail.com</p>
        </section>
      </article>
    </section>
  );
}