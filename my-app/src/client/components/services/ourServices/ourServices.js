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


import OurBundles from "../../ourBundles/ourBundles";


const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?q=80&w=1080",
    title: "LEO Technology",
    tags: "Logo, Website & Branding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664907057569-65ab622623c4?q=80&w=1080",
    title: "Crop Advisors",
    tags: "Brand Identity & Marketing",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594235048794-fae8583a5af5?q=80&w=1080",
    title: "Arena Offices",
    tags: "Brand Strategy & Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600812703042-38e573598898?q=80&w=1080",
    title: "Chrysalis Yacht Design",
    tags: "Luxury Branding & Collateral",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="portfolio-heading">Latest Branding Projects</h2>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};


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
                  <h1> Simplify Your Life With A Better Website</h1>
                  <Button style={{backgroundColor: "#3b82f6", color: "white"}} onClick={handleScrollDown} text="Find out more!"/>
              </div>
          </div>
          <div className="additionalBlockWrapper">
            <div className="additionalBlock">

              <div className="additionalBlockWrapperTitle">
                  <h2>WebApplications</h2>
              </div>
              <div className="additionalBlockWrapperParagraph">
                  <p className="additionalParagraph">
                    Looking to build a strong online presence or grow your business? We design and build websites that are clean, effective, and easy to manage.
                    Whether you need a simple portfolio site or a powerful website focused on generating leads, our in-house team takes care of everything — 
                    from design and development to hosting and ongoing support. We create reliable, end-to-end web solutions that help your brand stand out and perform.
                  </p>
              <a className="contact-link" href="ContactUs">
                        Contact us today →
                  </a>
              </div>
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
                    sections={[
                      {
                        title: "Built for tomorrow. Designed for you.",
                        paragraphs: [
                          "No two organisations are the same — and neither are our websites. We create bespoke digital experiences on flexible, future-ready platforms, designed around your goals and built to adapt as your business evolves.",
                          "With clean code and considered architecture at the core, our websites are fast, reliable, and crafted to perform — today, tomorrow, and beyond."
                        ],
                        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
                        linkText: "Talk to our website experts →",
                        linkUrl: "/",
                        imagePosition: "right"
                      },
                      {
                        title: "Experience with purpose.",
                        paragraphs: [
                          "Great design goes beyond appearance. We focus on how users move, think, and interact, creating seamless journeys that feel natural and intuitive from the first click to the last.",
                          "Every interaction is deliberate. Every detail earns its place. The result is a website that doesn’t just look good — it works hard for your business."
                        ],
                        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                        linkText: "Brief us today →",
                        linkUrl: "/",
                        imagePosition: "left"
                      }
                    ]}
                />

                <SplitVisualSection
                    sections={[
                      {
                        title: "Visibility that scales",
                        paragraphs: [
                          "We build websites that are ready to be found. From clean technical foundations to performance-led design, every build is optimised for speed, accessibility, and search.",
                          "By blending creative thinking with technical expertise, we help your brand grow its presence online — now and as the digital landscape continues to evolve."
                        ],
                        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
                        imagePosition: "right"
                      },
                      {
                        title: "Control without complexity.",
                        paragraphs: [
                          "Your website should be easy to manage, not a barrier to progress. Our bespoke builds make content updates simple, with intuitive tools that give you confidence and control.",

                          "We support you with tailored guidance, clear documentation, and real human support — so as your business grows, your website grows with you."
                        ],
                        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                        imagePosition: "left"
                      }
                    ]}
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
