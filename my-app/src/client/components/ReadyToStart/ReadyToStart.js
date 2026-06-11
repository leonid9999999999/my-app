import "./ReadyToStart.css";
import { Link } from "react-router-dom";

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
          <Link to="/ContactUs">
            <button className="ready__btn ready__btn--primary">
              Get a Quote →
            </button>
          </Link>

          <Link to="/ourPortfolio">
            <button className="ready__btn ready__btn--secondary">
              View Our Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStart;