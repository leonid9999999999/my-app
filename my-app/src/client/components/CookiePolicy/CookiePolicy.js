import { useEffect, useRef, useState } from "react";
import "./CookiePolicy";

export default function CookiePolicy() {

  const ref = useRef(null);
  const [active, setActive] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setActive(true);
    }, 800);


    return () => clearTimeout(timer);

  }, []);



  return (

    <section className="privacy">


      <article
        ref={ref}
        className={`privacy-paper ${active ? "active" : ""}`}
      >



        <header className="privacy-header">

          <h1>
            Cookie Policy
          </h1>

          <span>
            Last updated: 2026
          </span>

        </header>






        <section>

          <p className="lead">

            This Cookie Policy explains how VB Secure Solutions uses
            cookies and similar technologies when you visit our website.
            It describes what cookies are, why we use them, and how you
            can manage your preferences.

          </p>

        </section>







        <section>


          <h2>
            1. What Are Cookies?
          </h2>


          <p>

            Cookies are small text files stored on your device when you
            visit a website. They allow websites to remember information
            about your visit and provide a smoother, more reliable
            browsing experience.

          </p>


        </section>







        <section>


          <h2>
            2. How We Use Cookies
          </h2>


          <p>

            We use cookies to maintain website functionality, understand
            how visitors interact with our pages, and improve the overall
            performance and security of our services.

          </p>


          <ul>

            <li>
              <strong>Essential cookies</strong> required for the website
              to operate correctly.
            </li>


            <li>
              <strong>Performance cookies</strong> used to understand
              website usage and improve user experience.
            </li>


            <li>
              <strong>Preference cookies</strong> that help remember
              selected settings and improve convenience.
            </li>


          </ul>


        </section>








        <section>


          <h2>
            3. Types of Cookies We Use
          </h2>


          <p>

            Depending on their purpose, cookies used on our website may
            be temporary or remain on your device for a longer period.

          </p>


          <ul>


            <li>

              <strong>Session cookies</strong> are removed when you close
              your browser.

            </li>



            <li>

              <strong>Persistent cookies</strong> remain stored until they
              expire or are manually removed.

            </li>


          </ul>


        </section>







        <section>


          <h2>
            4. Third-Party Services
          </h2>


          <p>

            Some website features may rely on trusted third-party services
            that use cookies or similar technologies. These services help
            us analyse performance, improve functionality, or provide
            required website features.

          </p>


        </section>








        <section>


          <h2>
            5. Managing Cookies
          </h2>


          <p>

            You can control or delete cookies through your browser settings
            at any time. Please note that disabling certain cookies may
            affect some website functionality.

          </p>


        </section>








        <section>


          <h2>
            6. Website Analytics
          </h2>


          <p>

            Where analytics tools are used, information collected through
            cookies helps us understand visitor behaviour, identify
            performance issues and improve our website structure.

          </p>


        </section>








        <section>


          <h2>
            7. Data Protection
          </h2>


          <p>

            Cookie-related information is handled responsibly and in
            accordance with applicable data protection regulations.
            We do not use cookies to collect unnecessary personal data.

          </p>


        </section>








        <section>


          <h2>
            8. Changes To This Policy
          </h2>


          <p>

            We may update this Cookie Policy when our website,
            technologies or legal requirements change. Any updates will
            be published on this page with a revised date.

          </p>


        </section>








        <section>


          <h2>
            9. Contact
          </h2>


          <p>

            If you have any questions about our use of cookies,
            please contact us:

          </p>


          <p className="contact">

            vbsecuresolutions@gmail.com

          </p>


        </section>





      </article>


    </section>

  );

}