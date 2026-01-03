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
        <h2>SERVICE DETAILS AND BOOKING FORM</h2>
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
          buttonTitle='Book Now'
          serviceTitle={title}
          title={`Book a ${title} Plan`}
          desc="We will contact you before booking date to remind you"
        />
      </div>
    </div>
  );
};

export default ContactUs;
