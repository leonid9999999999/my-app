import { useEffect, useRef, useState } from "react";
import "./TermsOfService.css";

export default function TermsOfService() {
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
    <section className="terms">
      <article
        ref={ref}
        className={`terms-paper ${active ? "active" : ""}`}
      >
        

        <section>
          <p className="lead">
            These Terms of Service govern your access to and use of our website,
            services, and any related interactions. By using this website, you
            agree to these terms. If you do not agree, you should discontinue
            use of the site.
          </p>
        </section>

        <section>
          <h2>1. About Us</h2>
          <p>
            This website is operated by VB Secure Solutions. We provide digital
            services including website development, design, consulting, and
            presentation of previous work for informational purposes.
          </p>
        </section>

        <section>
          <h2>2. Use of the Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            of the site. Misuse, interference, or unauthorized access is
            strictly prohibited.
          </p>
        </section>

        <section>
          <h2>3. Services</h2>
          <p>
            Any services described on this website are provided subject to
            individual agreements. Information on this site does not constitute
            a binding offer and is provided for general informational purposes
            only.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, design, code, graphics,
            and showcased projects, is the intellectual property of VB Secure
            Solutions unless otherwise stated. Unauthorized reproduction or
            distribution is prohibited.
          </p>
        </section>

        <section>
          <h2>5. User Submissions</h2>
          <p>
            By submitting information through contact forms or other means, you
            confirm that the information provided is accurate and that you have
            the right to share it. We reserve the right to refuse or ignore
            submissions that are inappropriate or unlawful.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            This website and its content are provided on an “as is” basis. We do
            not guarantee accuracy, availability, or specific outcomes. To the
            maximum extent permitted by law, we shall not be liable for any
            damages resulting from the use or inability to use this website or
            services.
          </p>
        </section>

        <section>
          <h2>7. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of external
            sites.
          </p>
        </section>

        <section>
          <h2>8. Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to this website
            at our discretion, without notice, if these Terms are violated.
          </p>
        </section>

        <section>
          <h2>9. Changes to These Terms</h2>
          <p>
            These Terms of Service may be updated from time to time. Continued
            use of the website constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>10. Contact</h2>
          <p>
            If you have any questions regarding these Terms of Service, you may
            contact us at:
          </p>
          <p className="contact">vbsecuresolutions@gmail.com</p>
        </section>
      </article>
    </section>
  );
}
