import "./SelectedWork.css";
function SelectedWork() {
  return (
    <section className="selected-work">
      <div className="selected-work__container">
        <h2 className="selected-work__title">Selected Work</h2>

        <p className="selected-work__subtitle">
          Recent projects delivered for businesses across the UK and Europe.
        </p>

        <div className="selected-work__grid">
          {/* CARD 1 */}
          <div className="selected-work__card">
            <div className="selected-work__image">
              {/* IMAGE PLACEHOLDER */}
            </div>

            <span className="selected-work__tag">Web Application</span>
            <h3 className="selected-work__card-title">
              Financial Services Platform
            </h3>
            <p className="selected-work__card-text">
              Custom web application with real-time analytics, resulting in 40%
              increase in user engagement.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="selected-work__card">
            <div className="selected-work__image">
              {/* IMAGE PLACEHOLDER */}
            </div>

            <span className="selected-work__tag">Online Store</span>
            <h3 className="selected-work__card-title">
              E-Commerce Solution
            </h3>
            <p className="selected-work__card-text">
              Fully-featured e-commerce platform with custom checkout flow and
              inventory management.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="selected-work__card">
            <div className="selected-work__image">
              {/* IMAGE PLACEHOLDER */}
            </div>

            <span className="selected-work__tag">Marketing Site</span>
            <h3 className="selected-work__card-title">
              Corporate Website
            </h3>
            <p className="selected-work__card-text">
              Professional corporate site with CMS integration and multilingual
              support for EU markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
