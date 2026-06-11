import "./ClientTestimonials.css";

function ClientTestimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Client Testimonials</h2>

        <div className="testimonials__grid">

          {/* CARD 1 */}
          <div className="testimonial__card">
            <span className="testimonial__quote">“</span>

            <p className="testimonial__text">
              I honestly just needed something simple for my portfolio after finishing uni, but the result felt way above what I expected.
              It’s clean, loads fast, and I’ve already had a couple of recruiters mention it during applications.
              Felt like they actually understood what I was trying to achieve, not just “build a website”.
            </p>

            <div className="testimonial__author">
              <span className="testimonial__name">Daniel R.</span>
              <span className="testimonial__role">
                Graduate Portfolio Project
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="testimonial__card">
            <span className="testimonial__quote">“</span>

            <p className="testimonial__text">
              We were honestly losing track of bookings before this. Now everything is in one place and it just works.
              The interface is simple enough that our staff didn’t need training, which was a big win for us.
              There were a few small tweaks we requested during development and they were handled quickly without any back and forth drama.
            </p>

            <div className="testimonial__author">
              <span className="testimonial__name">Sarah M.</span>
              <span className="testimonial__role">
                Book Flow Operations Team
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="testimonial__card">
            <span className="testimonial__quote">“</span>

            <p className="testimonial__text">
              This was a very different kind of project for us — we wanted something that combines Welsh heritage content with interactive learning.
              The AI features were honestly the part I was most unsure about at first, but they ended up being the highlight.
              People can explore museum items, translate phrases, and actually interact with the history instead of just reading about it.
            </p>

            <div className="testimonial__author">
              <span className="testimonial__name">Jhon A.</span>
              <span className="testimonial__role">
                Welsh Heritage Digital Project
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;