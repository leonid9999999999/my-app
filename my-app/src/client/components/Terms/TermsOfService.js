import { useEffect, useState } from "react";
import "./TermsOfService.css";

export default function TermsOfService() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="terms">
      <article className={`terms-paper ${active ? "active" : ""}`}>
        <header className="terms-header">
          <h1>Terms of Service</h1>
          <span>Last updated: June 2026</span>
        </header>

        <section>
          <p className="lead">
            These Terms of Service govern your access to and use of our website,
            services, and related communications. By using this website, you
            agree to comply with these terms. If you do not agree, please
            discontinue use of the website.
          </p>
        </section>

        <section>
          <h2>1. About Us</h2>
          <p>
            VB Secure Solutions provides professional website design,
            development, and digital consulting services for businesses across
            the United Kingdom and Europe.
          </p>
        </section>

        <section>
          <h2>2. Website Use</h2>
          <p>
            You agree to use this website lawfully and responsibly. Any attempt
            to disrupt, damage, gain unauthorized access to, or misuse the
            website is strictly prohibited.
          </p>
        </section>

        <section>
          <h2>3. Services & Quotations</h2>
          <p>
            Information presented on this website is provided for general
            informational purposes only and does not constitute a legally
            binding offer. Specific services are governed by separate agreements
            between us and our clients.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All website content, including code, graphics, designs, text,
            branding, and project showcases, remains the intellectual property
            of VB Secure Solutions unless otherwise stated.
          </p>
        </section>

        <section>
          <h2>5. Client Communications</h2>
          <p>
            Any information submitted through contact forms, email, or other
            communication channels must be accurate and lawful. We reserve the
            right to decline inappropriate or abusive enquiries.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            While we strive to keep all information accurate and up to date, we
            cannot guarantee that the website will always be error-free or
            uninterrupted. Use of the website is at your own risk.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the content, security, or privacy practices of
            third-party sites.
          </p>
        </section>

        <section>
          <h2>8. Suspension or Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to this website
            if these Terms are violated or if misuse is detected.
          </p>
        </section>

        <section>
          <h2>9. Changes to These Terms</h2>
          <p>
            These Terms may be updated periodically. Continued use of the
            website following updates constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have questions regarding these Terms of Service, please
            contact us:
          </p>

          <p className="contact">
            vbsecuresolutions@gmail.com
          </p>
        </section>
      </article>
    </section>
  );
}