import "./contactUs.css";

  import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import PhoneIcon from "../../components/icons/PhoneIcon";
import LocationIcon from "../../components/icons/LocationIcon";
import Email from "../../components/icons/Email";
import Clock from "../../components/icons/Clock"
import withRouter from '../navigate/navigate';
import InfoBlock from "./infoBlock/infoBlock";
import BookingForm from "../bookingForm/bookingForm";

const ContactUs = (props) => {
  const { location } = props;
  const { title, price, serviceDescription, urlImage } = location?.state || {};

  return (
    // service details with booking form component
    <div className='servicePageWrapper'>
 
      
      <div className='pagetitle'>
        <h2>Let's Get Your Project Started</h2>
      </div>
      <div>
        <section class="tech-hero-block">
          <div class="tech-hero-content">
              <h1>We’d love to hear from you</h1>
              <p>Whether you have a question about our API, architecture, pricing, need a technical demo, or anything else, our engineering team is ready to answer all your questions.</p>
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
                content="+44 20 1234 5678"
                link="tel:+442012345678"
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
          serviceTitle={title}
          title={`Book a ${title} Plan`}
          desc="We Will Contact You Soon"
        />
      </div>
    </div>
  );
};

export default ContactUs;
