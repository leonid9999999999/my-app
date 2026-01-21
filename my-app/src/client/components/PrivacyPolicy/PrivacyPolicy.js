import { useEffect, useRef, useState } from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="privacy">
      <article
        ref={ref}
        className={`privacy-paper ${active ? "active" : ""}`}
      >
        

        <section>
          <p className="lead">
            This Privacy Policy describes how we collect, use, store and protect
            personal information when you interact with our website and related
            services. We treat data protection as a fundamental responsibility
            and comply with applicable privacy regulations.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect only the information that is necessary to provide and
            improve our services. This may include:
          </p>

          <ul>
            <li>
              <strong>Identifiable information</strong> such as name, email
              address or business details provided directly by you.
            </li>
            <li>
              <strong>Technical information</strong> including IP address,
              browser configuration and device identifiers.
            </li>
            <li>
              <strong>Usage information</strong> related to interactions,
              navigation patterns and feature usage.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Purpose of Processing</h2>
          <p>
            Personal data is processed solely for legitimate and clearly defined
            purposes, including service delivery, communication, analytics,
            security and legal compliance.
          </p>
        </section>

        <section>
          <h2>3. Legal Grounds</h2>
          <p>
            We rely on lawful bases such as consent, contractual necessity,
            legitimate interests and statutory obligations when processing
            personal data.
          </p>
        </section>

        <section>
          <h2>4. Data Sharing</h2>
          <p>
            We do not sell personal information. Data may be shared only with
            trusted service providers acting on our instructions and subject to
            confidentiality obligations.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Cookies and similar technologies are used to ensure functionality
            and understand usage trends. You remain in control of cookie
            preferences via your browser settings.
          </p>
        </section>

        <section>
          <h2>6. Retention</h2>
          <p>
            Personal data is retained only for as long as necessary to fulfil
            its intended purpose or meet legal requirements.
          </p>
        </section>

        <section>
          <h2>7. Security Measures</h2>
          <p>
            We apply industry-standard technical and organizational safeguards
            designed to protect information from unauthorized access,
            disclosure or loss.
          </p>
        </section>

        <section>
          <h2>8. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, correct,
            delete or restrict the use of your personal data, as well as the
            right to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section>
          <h2>9. Policy Updates</h2>
          <p>
            This Privacy Policy may be updated periodically. The latest version
            will always be available on this page.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            Questions regarding this Privacy Policy may be directed to:
          </p>
          <p className="contact">vbsecuresolutions@gmail.com</p>
        </section>
      </article>
    </section>
  );
}
