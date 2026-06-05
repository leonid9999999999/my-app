import SplitVisualSection from "../splitSection/splitVisualSection"
import eCom2 from "../../../resources/displayImages/ecomMore.png"
import "./portfolioExample.css"
import { borderRadius, height, width } from "@mui/system"
import ImageSlider2 from "../imageSlider2/imageSlider2"
import portfolioData from "../../data/portfolio/porfolioData.json";
import Spinner from "../spinner/Spinner"; // Make sure path is correct
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PortfolioExample(){
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        const foundProject = portfolioData.find(p => p.id === id);

        if (foundProject) {
            setProject(foundProject);
        }

        setLoading(false);
    }, [id]);

    if (loading) {
        // Show spinner while loading
        return (
            <div className="spinnerWrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                <Spinner />
            </div>
        );
    }


    return(

        <div className="portfolioExampleWrapper">
            <div className="portfolioExampleBlock">
                <div className="portfolioPageTitle">
                    <h2>{project.title}</h2>

                </div>
                <div className="portfolioSliderBlock">
                    <div className="porfolioSlider">
                        <ImageSlider2 images={project.sliderImages} />
                    </div>
                    
                </div>
                <div className="portfolioMainInfoBlock">
                    {/* <div className="portfolioMainInfoBlockTitle">
                        <h3>Website for Clothing Resller</h3>
                    </div> */}
                    <div className="explanationInfoBlock">
                        <SplitVisualSection
                            styles = {{borderRadius: 15, height: 400, width: 600}}
                            sections={project.sections}
                        />
                    </div>
                </div>
                <div className="moreInfromationAboutProjectWrapper">
                    <div className="moreInfromationAboutProject">
                        <h2>The Result</h2>
                        <p>
                            What We Developed: We have deployed a high-performance, mobile-first e-commerce platform specifically engineered for the unique demands of
                            the fashion resale market. Unlike standard retail sites, this platform is built on a "Single-SKU" architecture, designed to handle one-off
                            vintage and pre-loved items without the risk of double-selling.
                        </p>
                        <div className="why-it-is-good">
                            {project.whyGood.length > 0 && (
                                <div className="why-it-is-good">
                                    <h2>Why It Is Good</h2>
                                    <ul>
                                        {project.whyGood.map((benefit, index) => (
                                            <li key={index}>
                                                {/* Render Title in Bold */}
                                                <strong>{benefit.title}: </strong>

                                                {/* Render Content */}
                                                {benefit.content}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioExample