import { useEffect, useRef, useState } from "react";
import "./Accessibility.css";

export default function Accessibility() {

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
            Accessibility
          </h1>


          <span>
            Last updated: 2026
          </span>


        </header>






        <section>


          <p className="lead">

            VB Secure Solutions is committed to creating websites that
            are accessible, clear and easy to use for all visitors.
            We continuously work to improve usability and ensure our
            digital experiences can be accessed by as many people as possible.

          </p>


        </section>








        <section>


          <h2>
            1. Our Approach
          </h2>


          <p>

            Accessibility is considered throughout our design and
            development process. We focus on creating interfaces that
            are simple to navigate, responsive across devices and
            understandable for different users.

          </p>


        </section>








        <section>


          <h2>
            2. Accessibility Standards
          </h2>


          <p>

            We aim to follow recognised accessibility principles,
            including guidance provided by the Web Content Accessibility
            Guidelines (WCAG). These principles help us improve website
            structure, readability and interaction.

          </p>


        </section>








        <section>


          <h2>
            3. Features We Consider
          </h2>



          <ul>


            <li>
              Clear page structure and meaningful headings.
            </li>


            <li>
              Sufficient colour contrast between text and backgrounds.
            </li>


            <li>
              Keyboard-friendly navigation where applicable.
            </li>


            <li>
              Responsive layouts for different screen sizes and devices.
            </li>


            <li>
              Optimised content and interfaces designed with usability
              in mind.
            </li>


          </ul>



        </section>








        <section>


          <h2>
            4. Continuous Improvement
          </h2>


          <p>

            Website accessibility is an ongoing process. As technologies,
            standards and user expectations develop, we review and improve
            our solutions to provide a better experience.

          </p>


        </section>








        <section>


          <h2>
            5. Third-Party Content
          </h2>


          <p>

            Some website features may include third-party services that
            are outside of our direct control. While we aim to work with
            reliable providers, accessibility features may vary depending
            on external platforms.

          </p>


        </section>








        <section>


          <h2>
            6. Feedback
          </h2>


          <p>

            If you experience any accessibility difficulties while using
            our website, we welcome your feedback. Your comments help us
            identify areas where improvements can be made.

          </p>


        </section>








        <section>


          <h2>
            7. Contact
          </h2>


          <p>
            For accessibility questions or suggestions, contact us at:
          </p>



          <p className="contact">

            vbsecuresolutions@gmail.com

          </p>


        </section>






      </article>


    </section>

  );

}