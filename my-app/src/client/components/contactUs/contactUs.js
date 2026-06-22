import "./contactUs.css";

import PhoneIcon from "../../components/icons/PhoneIcon";
import LocationIcon from "../../components/icons/LocationIcon";
import Email from "../../components/icons/Email";
import Clock from "../../components/icons/Clock"
import InfoBlock from "./infoBlock/infoBlock";
import BookingForm from "../bookingForm/bookingForm";

const ContactUs = (props) => {

  return (
    // service details with booking form component
    <div className='servicePageWrapper'>
 
      
      <div className='pagetitle'>
        <h2>Let's Get Your Project Started</h2>
      </div>
      <div>
        <section className="tech-hero-block">
          <div className="tech-hero-content">
              <h1>We’d love to hear from you</h1>
            <p>Whether you have questions about our service, architecture, or pricing? Book a meeting with us to discuss how we can solve your specific challenges.</p>
          </div>
        </section>
      </div>

      <div className='detailsWrapper'>
        
      </div>

      <div className="formWrapper">
        <div className="additionalInformationWrapper">
          
          <div className="additionalInformation">
            <h2 id="visit-us-heading">Our Contacts</h2>

              <InfoBlock
                icon={PhoneIcon}
                name="Phone"
                content="+44 73 0840 5339"
                link="tel:+44 73 0840 5339"
              />

              <InfoBlock
                icon={Email}
                name="Email"
                content="vbsecuresolutions@gmail.com"
                link="vbsecuresolutions@gmail.com"
              />

              <InfoBlock
                icon={LocationIcon}
                name="Location"
                content="We are based in Cardiff, UK"
              />
              <InfoBlock
                icon={Clock}
                name="Working Hours"
                content="Monday to Saturday 09:00 AM to 07:00 PM"
              />
              <div className="additionalInfo">
                <p>Got questions? Don’t hesitate to contact us.</p>
              </div>
              <div className="additionalInfo">
                <p>We usually respond within 24 hours.</p>
              </div>
        </div>
      </div>
        <BookingForm
          buttonTitle='Submit'

          desc="We Will Contact You Soon"
        />
      </div>
    </div>
  );
};

export default ContactUs;
