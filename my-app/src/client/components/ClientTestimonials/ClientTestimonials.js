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
              Professional, reliable, and delivered exactly what we needed.
              The communication throughout the project was excellent.
            </p>

            <div className="testimonial__author">
              <span className="testimonial__name">Sarah Mitchell</span>
              <span className="testimonial__role">
                Director, TechStart UK
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="testimonial__card">
            <span className="testimonial__quote">“</span>

            <p className="testimonial__text">
              Our new website has significantly improved our online presence.
              The team understood our requirements perfectly.
            </p>

            <div className="testimonial__author">
              <span className="testimonial__name">James Patterson</span>
              <span className="testimonial__role">
                CEO, Nordic Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
