import "./ReadyToStart.css";

function ReadyToStart() {
  return (
    <section className="ready">
      <div className="ready__container">
        <h2 className="ready__title">Ready to Start Your Project?</h2>

        <p className="ready__subtitle">
          Get in touch today to discuss your requirements and receive a
          detailed project proposal.
        </p>

        <div className="ready__actions">
          <button className="ready__btn ready__btn--primary">
            Get a Quote →
          </button>

          <button className="ready__btn ready__btn--secondary">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStart;
