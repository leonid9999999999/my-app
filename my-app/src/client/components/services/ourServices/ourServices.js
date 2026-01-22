import ImageSlider from "../../imageSlider/imageSlider";
import Button from "../../Tools/button/button";
import SplitVisualSection from "../../splitSection/splitVisualSection";
import ProcessCard from "../../processCard/processCard";
import FAQSection from "../faqSection/faqSection";
import ProjectCard from "../projectCard/projectCard";
import OurBundles from "../../ourBundles/ourBundles";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../spinner/Spinner.js";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";
import "./ourServices.css";
import "./portfolioGrid.css";

const OurServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetSection = useRef(null);

  // --- Loading states
  const [loadingSlider, setLoadingSlider] = useState(true);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);
  const [loadingProcess, setLoadingProcess] = useState(true);
  const [loadingBundles, setLoadingBundles] = useState(true);

  // --- Data states
  const [slides, setSlides] = useState([]);
  const [sections, setSections] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  const [cards, setCards] = useState([]);
  const [firstPageTitle, setFirstPageTitle] = useState("");
  const [additionalTitle, setAdditionalTitle] = useState("");
  const [additionalParagraph, setAdditionalParagraph] = useState("");

  // --- Load all JSON / hardcoded data
  useEffect(() => {
    try {
      const serviceDetails = location?.state;
      if (!serviceDetails) return;

      const info = serviceDetails.ourServicesInfo[0] || {};

      // --- Slider and sections
      setSlides(info.sliderImages || []);
      setSections(info.sections || []);
      setFirstPageTitle(info.firstPageTitle || "");
      setAdditionalTitle(info.additionalTitle || "");
      setAdditionalParagraph(info.additionalParagpragh || "");
      setLoadingSlider(false);

      // --- Portfolio
      import("../../../data/portfolio/porfolioData.json").then((module) => {
        setPortfolioData(module.default || []);
        setLoadingPortfolio(false);
      },);

      // --- Process cards (hardcoded)
      const cardsData = [
        {
          title: "Discover",
          image:
            "https://res.cloudinary.com/dibygfenr/image/upload/v1768528827/dicover_qqnupz.png",
          alt: "Discovery session",
          text:
            "Through discovery sessions, we explore your goals, challenges, and competitors. We uncover audience needs and create a clear plan that fits your business.",
          imageStyle: {
            borderTopRightRadius: "180px",
            borderBottomRightRadius: "0px",
          },
        },
        {
          title: "Design",
          image:
            "https://res.cloudinary.com/dibygfenr/image/upload/v1768529147/design_ayx6yd.jpg",
          alt: "Website design",
          text:
            "We create fresh, engaging designs that bring your ideas to life. Our focus is on clarity, usability, and strong visual impact.",
        },
        {
          title: "Develop",
          image:
            "https://res.cloudinary.com/dibygfenr/image/upload/v1768529794/Developing_nmte87.jpg",
          alt: "Website development",
          text:
            "We build fast, reliable websites tailored to your needs. From simple sites to custom features, everything is built to perform.",
          imageStyle: {
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "180px",
          },
        },
      ];
      setCards(cardsData);
      setLoadingProcess(false);

      // --- Bundles (assuming static component)
      setLoadingBundles(false);
    } catch (error) {
      console.error("Error loading data", error);
      setLoadingSlider(false);
      setLoadingPortfolio(false);
      setLoadingProcess(false);
      setLoadingBundles(false);
    }
  }, [location?.state]);

  // --- Scroll handler
  const handleScrollDown = () => {
    targetSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Navigation handler for portfolio
  const handlePortfolioClick = (item) => {
    const safeSections = item.sections || [];
    const safeBenefits = item.whyGood || [];
    const safeSliderImages = item.sliderImages || [];

    navigate(`/portfolio/${item.id}`, {
      state: {
        title: item.title,
        sections: safeSections,
        whyGood: safeBenefits,
        moreDescriptionAboutService: item.moreDescriptionAboutService,
        sliderImages: safeSliderImages,
      },
    });
  };

  return (
    <div className="servicePage">
      {/* --- First block: Slider */}
      <div className="firstBlockMainWrapper">
        <div className="firsBlockMain">
          <div className="slider">
            <ErrorBoundary>
              {loadingSlider ? <Spinner /> : <ImageSlider images={slides} interval={3000} />}
            </ErrorBoundary>
          </div>
          <div className="Title">
            <h1>{firstPageTitle}</h1>
            <Button
              style={{ fontWeight: "bold", border: 0, backgroundColor: "#3b82f6", color: "white" }}
              onClick={handleScrollDown}
              text="Find out more!"
            />
          </div>
        </div>

        
      </div>

      {/* --- Portfolio Grid */}
      <div className="secondBlockOurProject">
        <div className="ourProject" ref={targetSection}>
          <ErrorBoundary>
            {loadingPortfolio ? (
              <Spinner />
            ) : (
              <section className="portfolio-section">
                <div className="portfolio-container">
                  <h2 className="portfolio-heading">Latest Branding Projects</h2>
                  <div className="portfolio-grid">
                    {portfolioData.map((project, index) => (
                      <ProjectCard
                        key={index}
                        onClick={() => handlePortfolioClick(project)}
                        title={project.title}
                        image={project.image}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </ErrorBoundary>
        </div>
      </div>

      {/* --- Process Cards */}
      <div className="thirdBlockProcess">
        <div className="blockProcess">
          <h2 className="blockTitle">Our Recipe</h2>
          <div className="ourRecipeWrapper">
            {loadingProcess ? (
              <Spinner />
            ) : (
              cards.map((card, index) => (
                <ErrorBoundary key={index}>
                  <ProcessCard {...card} />
                </ErrorBoundary>
              ))
            )}
          </div>
        </div>
      </div>

      {/* --- Split Section */}
      <div className="forthBlockMoreAboutService">
        <div className="AboutService">
          <ErrorBoundary>
            <SplitVisualSection sections={sections} />
          </ErrorBoundary>
        </div>
      </div>

      {/* --- FAQ Section */}
      <div className="fifthBlockFAQWrapper">
        <div className="blockTitle">
          <FAQSection />
        </div>
      </div>

      {/* --- Our Bundles */}
      <div className="sixthBlockOurBundlesrapper">
        <h2 className="blockTitle">Our Bundles</h2>
        <div className="ourBundles">{loadingBundles ? <Spinner /> : <OurBundles />}</div>
      </div>
    </div>
  );
};

export default OurServices;
