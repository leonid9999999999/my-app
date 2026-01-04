import "./contactUs.css";


import withRouter from '../navigate/navigate';

import BookingForm from "../bookingForm/bookingForm";

const ContactUs = (props) => {
  const { location } = props;
  const { title, price, serviceDescription, urlImage } = location?.state || {};

  return (
    // service details with booking form component
    <div className='servicePageWrapper'>
 
      
      <div className='pagetitle'>
        <h2>Get In Touch With Us</h2>
      </div>
      <div>
        <section class="tech-hero-block">
        <div class="tech-hero-content">
            <h1>We’d love to hear from you</h1>
            <p>Whether you have a question about our API, architecture, pricing, need a technical demo, or anything else, our engineering team is ready to answer all your questions.</p>
        </div>
    </section>
        <div>
          <h2></h2>
        </div>
      </div>

      <div className='detailsWrapper'>
        <div className='imgWrapper'>
          <img
            src={urlImage}
            alt='service img'
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className='mainDetails'>
          <h3 className='serviceTitle'>
            {`${title} £${price}`}
          </h3>

          <p className='serviceDesc'>
            {serviceDescription}
          </p>
        </div>
      </div>

      <div className="formWrapper">
        <BookingForm
          buttonTitle='Submit'
          serviceTitle={title}
          title={`Book a ${title} Plan`}
          desc="We will contact you before booking date to remind you"
        />
      </div>
    </div>
  );
};

export default ContactUs;
