import SplitVisualSection from "../splitSection/splitVisualSection"
import "./portfolioExample.css"
import ImageSlider2 from "../imageSlider2/imageSlider2"
import portfolioData from "../../data/portfolio/porfolioData.json";
import Spinner from "../spinner/Spinner"; // Make sure path is correct
import { CheckCircle2 } from 'lucide-react';
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
                        <div className="moreInfoWrapperParagraph">
                            <p>
                                {project.moreDescriptionAboutService}
                            </p>
                        </div>
                        <div className="why-it-is-good">
                            {project.whyGood && project.whyGood.length > 0 && (
                                <div className="mt-16 w-full max-w-6xl mx-auto px-6">

                                    {/* CSS Grid for the Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {project.whyGood && project.whyGood.length > 0 && (
                                            <div className="benefits-section">
                                                <h3 className="benefits-title">Why It Works</h3>

                                                <div className="benefits-grid">
                                                    {project.whyGood.map((benefit, index) => (
                                                        <div key={index} className="benefit-card">
                                                            <div className="benefit-icon-wrapper">
                                                                <CheckCircle2 size={32} />
                                                            </div>

                                                            <h4 className="benefit-card-title">
                                                                {benefit.title}
                                                            </h4>

                                                            <p className="benefit-card-content">
                                                                {benefit.content}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
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