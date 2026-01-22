import ImageSlider from "../../imageSlider/imageSlider";
import Button from "../../Tools/button/button";
import SplitVisualSection from "../../splitSection/splitVisualSection";
import ProcessCard from "../../processCard/processCard";
import "./ourServices.css";
import "./portfolioGrid.css";
import FAQSection from "../faqSection/faqSection";
import ProjectCard from "../projectCard/projectCard";
import { useRef } from 'react';
import SingleBundle from "../../ourBundles/singleBundle/singleBundle";
import portfolioData from "../../../data/portfolio/porfolioData.json";

import OurBundles from "../../ourBundles/ourBundles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const PortfolioGrid = () => {
  const navigate = useNavigate();
  function Page(item) {

    const safeSections = item.sections || [];
    const safeBenefits = item.whyGood || [];
    const safeSliderImages = item.sliderImages || [];
    console.log("sections    ", safeSliderImages)
    navigate(`/portfolio/${item.id}`,
      {
        state: {
          title: item.title,
          // paragraphs: item.sections.paragraphs,
          sections: safeSections,
          whyGood: safeBenefits,
          moreDescriptionAboutService: item.moreDescriptionAboutService,
          sliderImages: safeSliderImages
        }
      });

  }
  
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-heading">Latest Branding Projects</h2>

        <div className="portfolio-grid">
          {portfolioData.map((project, index) => (
            <ProjectCard onClick={() => Page(project)} key={index} title={project.title} image={project.image} {...portfolioData} />
          ))}
        </div>
      </div>
    </section>
  );
};


const OurServices = (props) => {
  const location = useLocation();

  const serviceDetails = location?.state;
  const sections = serviceDetails.ourServicesInfo[0].sections
  const slides= serviceDetails.ourServicesInfo[0].sliderImages
 
  const { firstPageTitle, additionalTitle, additionalParagpragh} = serviceDetails.ourServicesInfo[0]|| {};

  console.log("SeC", firstPageTitle)

 
// Hard codeed Leave it  Ostav' !!!!
const cards = [
  {
    title: "Discover",
    image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768528827/dicover_qqnupz.png",
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
    image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768529147/design_ayx6yd.jpg",
    alt: "Website design",
    text:
      "We create fresh, engaging designs that bring your ideas to life. Our focus is on clarity, usability, and strong visual impact."
  },
  {
    title: "Develop",
    image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768529794/Developing_nmte87.jpg",
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

const targetSection = useRef(null);

  const handleScrollDown = () => {
    // 2. Use 'scrollIntoView' to scroll smoothly
    targetSection.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    // service details with booking form component
    <div className="servicePage">
      <div className="firstBlockMainWrapper">
          <div className="firsBlockMain">
              <div className="slider">
                <ImageSlider images={slides} interval={3000} />
              </div>
              <div className="Title">
                  <h1> {firstPageTitle}</h1>
                  <Button style={{backgroundColor: "#3b82f6", color: "white"}} onClick={handleScrollDown} text="Find out more!"/>
              </div>
          </div>
          
        </div>
        <div className="secondBlockOurProject">
            <div className="ourProject">
            <div className="ourProjectsWrapper" ref={targetSection}>
                    <PortfolioGrid/>
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
              {/* What We Do section in service in more details  */}
                <SplitVisualSection
                    sections={sections}
                />

            </div>
        </div>
        <div className="fifthBlockFAQWrapper">
          <div className="blockTitle">
            <FAQSection/>
            {/* <h2 className="text-4xl md:text-5xl text-[#1a3a52] mb-12">
              FAQs
            </h2> */}
          </div>
        </div>

        <div className="sixthBlockOurBundlesrapper">
          <h2 className="blockTitle">
            Our Bundles
          </h2>
          <div className="ourBundles">
            <OurBundles/>
          </div>
        </div>
    </div>
  );
};

export default OurServices;
