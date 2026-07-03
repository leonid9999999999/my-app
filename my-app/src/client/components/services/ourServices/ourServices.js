import ImageSlider from "../../imageSlider/imageSlider";
import Button from "../../Tools/button/button";
import SplitVisualSection from "../../splitSection/splitVisualSection";
import ProcessCard from "../../processCard/processCard";
import FAQSection from "../faqSection/faqSection";
import ProjectCard from "../projectCard/projectCard";
import OurBundles from "../../ourBundles/ourBundles";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../spinner/Spinner.js";
import "./ourServices.css";
import "./portfolioGrid.css";

const OurServices = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const targetSection = useRef(null);
  const { id } = useParams();

  // --- 1. Bulletproof check: Is this the "Prices" link? ---
  const isOnlyBundles = id === "prices" || location.state?.scrollTo === "OurBundles";

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

  // --- Scroll logic
  useEffect(() => {
    if (location.state && location.state.scrollTo === "OurBundles") {
      setTimeout(() => {
        const targetSection = document.getElementById("OurBundles");
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  // --- Load all JSON / hardcoded data
  useEffect(() => {
    // If it's ONLY bundles, stop loaders early and skip the rest
    if (isOnlyBundles) {
      setLoadingBundles(false);
      return;
    }

    try {
      // 2. ALWAYS load Portfolio, Process, and Bundles (fixes the missing data bug!)
      import("../../../data/portfolio/porfolioData.json").then((module) => {
        setPortfolioData(module.default || []);
        setLoadingPortfolio(false);
      });

      const cardsData = [
        {
          title: "Discover",
          image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768528827/dicover_qqnupz.png",
          alt: "Discovery session",
          text: "Through discovery sessions, we explore your goals, challenges, and competitors. We uncover audience needs and create a clear plan that fits your business.",
          imageStyle: { borderTopRightRadius: "180px", borderBottomRightRadius: "0px" },
        },
        {
          title: "Design",
          image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768529147/design_ayx6yd.jpg",
          alt: "Website design",
          text: "We create fresh, engaging designs that bring your ideas to life. Our focus is on clarity, usability, and strong visual impact.",
        },
        {
          title: "Develop",
          image: "https://res.cloudinary.com/dibygfenr/image/upload/v1768529794/Developing_nmte87.jpg",
          alt: "Website development",
          text: "We build fast, reliable websites tailored to your needs. From simple sites to custom features, everything is built to perform.",
          imageStyle: { borderTopRightRadius: "0px", borderBottomRightRadius: "0px", borderTopLeftRadius: "180px" },
        },
      ];
      setCards(cardsData);
      setLoadingProcess(false);
      setLoadingBundles(false);

      // 3. ONLY load Slider and Header data if we have the specific service details
      const serviceDetails = location?.state;
      if (serviceDetails && serviceDetails.ourServicesInfo) {
        const info = serviceDetails.ourServicesInfo[0] || {};
        setSlides(info.sliderImages || []);
        setSections(info.sections || []);
        setFirstPageTitle(info.firstPageTitle || "");
        setAdditionalTitle(info.additionalTitle || "");
        setAdditionalParagraph(info.additionalParagpragh || "");
      }

      setLoadingSlider(false);

    } catch (error) {
      console.error("Error loading data", error);
      setLoadingSlider(false);
      setLoadingPortfolio(false);
      setLoadingProcess(false);
      setLoadingBundles(false);
    }
  }, [location?.state, isOnlyBundles]);

  // --- Handlers
  const handleScrollDown = () => {
    targetSection.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePortfolioClick = (item) => {
    navigate(`/portfolio/${item.id}`, {
      state: {
        title: item.title,
        sections: item.sections || [],
        whyGood: item.whyGood || [],
        moreDescriptionAboutService: item.moreDescriptionAboutService,
        sliderImages: item.sliderImages || [],
      },
    });
  };

  return (
    <div className="servicePage">

      {/* CONDITIONAL RENDERING: Show full page if it's NOT just the prices link */}
      {!isOnlyBundles && (
        <>
          <div className="firstBlockMainWrapper">
            <div className="firsBlockMain">
              <div className="slider">
                {/* Fallback to hide slider if no slides exist yet */}
                {loadingSlider ? <Spinner /> : slides.length > 0 ? <ImageSlider images={slides} interval={3000} /> : null}
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

          <div className="secondBlockOurProject">
            <div className="ourProject" ref={targetSection}>
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
            </div>
          </div>

          <div className="thirdBlockProcess">
            <div className="blockProcess">
              <h2 className="blockTitle">Our Recipe</h2>
              <div className="ourRecipeWrapper">
                {loadingProcess ? <Spinner /> : cards.map((card, index) => <ProcessCard key={index} {...card} />)}
              </div>
            </div>
          </div>

          <div className="forthBlockMoreAboutService">
            <div className="AboutService">
              <SplitVisualSection sections={sections} />
            </div>
          </div>

          <div className="fifthBlockFAQWrapper">
            <div className="blockTitle">
              <FAQSection />
            </div>
          </div>
        </>
      )}

      {/* --- Our Bundles (ALWAYS SHOW) --- */}
      <div className="sixthBlockOurBundlesrapper" style={{ paddingTop: isOnlyBundles ? '120px' : '0' }}>
        <h2 className="blockTitle">Our Bundles</h2>
        <div id="OurBundles" className="ourBundles">
          {loadingBundles ? <Spinner /> : <OurBundles />}
        </div>
      </div>

    </div>
  );
};

export default OurServices;