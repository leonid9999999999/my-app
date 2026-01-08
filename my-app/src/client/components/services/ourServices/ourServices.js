import ImageSlider from "../../imageSlider/imageSlider";
import Button from "../../Tools/button/button";

import ProcessCard from "../../processCard/processCard";
import "./ourServices.css";

const OurServices = (props) => {
  const { location } = props;
  const { title, price, serviceDescription, urlImage } = location?.state || {};
  const slides = [
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
];

const cards = [
  {
    title: "Discover",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    alt: "Discovery session",
    text:
      "Through discovery sessions, we explore your goals, challenges, and competitors. We uncover audience needs and create a clear plan that fits your business.",
    imageStyle: {
      borderTopRightRadius: "180px",
      borderBottomRightRadius: "0px"
    }
  },
  {
    title: "Design",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    alt: "Website design",
    text:
      "We create fresh, engaging designs that bring your ideas to life. Our focus is on clarity, usability, and strong visual impact."
  },
  {
    title: "Develop",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    alt: "Website development",
    text:
      "We build fast, reliable websites tailored to your needs. From simple sites to custom features, everything is built to perform.",
    imageStyle: {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      borderTopLeftRadius: "180px"
    }
      
  }
];


  return (
    // service details with booking form component
    <div className="servicePage">
      <div className="firstBlockMainWrapper">
          <div className="firsBlockMain">
              <div className="slider">
                <ImageSlider images={slides} interval={3000} />
              </div>
              <div className="Title">
                  <h1> Simplify Your Life with a Better Website</h1>
                  <Button text="Find out more!"/>
              </div>
          </div>
          <div className="additionalBlockWrapper">
            <div className="additionalBlock">

              <div className="additionalBlockWrapperTitle">
                  <h2>WebApplication / Website</h2>
              </div>
              <div className="additionalBlockWrapperParagraph">
                  <p className="additionalParagraph">
                    Looking to build a strong online presence or grow your business? We design and build websites that are clean, effective, and easy to manage.
                    Whether you need a simple portfolio site or a powerful website focused on generating leads, our in-house team takes care of everything — 
                    from design and development to hosting and ongoing support. We create reliable, end-to-end web solutions that help your brand stand out and perform.
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondBlockOurProject">
            <div className="ourProject">
                 <h2 className="blockTitle">
                  Latest Branding Projects
                </h2>
                <div className="ourProjectsWrapper">

                </div>
            </div>
        </div>
        <div className="thirdBlockProcess">
            <div className="blockProcess">
                <h2 className="blockTitle">
                  Our Recipe 
                </h2>
                {/* block with images and brief descriptoion about each block  */}
                {/* <div className="ourRecipeWrapper">
                    {cards.map((card, index) => (
                      <ProcessCard key={index} {...card} />
                    ))}
                </div> */}
                <div className="ourRecipeWrapper">
                    {cards.map((card, index) => (
                      <ProcessCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
        <div className="forthBlockMoreAboutService">
            <div className="AboutService">
                
            </div>
        </div>
        <div className="fifthBlockFAQWrapper">
          <div className="blockTitle">
            <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-12">
              FAQs
            </h2>
          </div>
        </div>
    </div>
  );
};

export default OurServices;
