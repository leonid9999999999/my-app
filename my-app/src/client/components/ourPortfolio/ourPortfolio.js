import SinglePortfolio from "./singlePorfolio/singlePortfolio";
import portfolioData from "../../data/portfolio/porfolioData.json";
import { useNavigate } from "react-router-dom";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner"; // Make sure path is correct
import { useState, useEffect } from "react";
import "./ourPortfolio.css";

function OurPortfolio() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [portfolioItems, setPortfolioItems] = useState([]);

    // --- Load portfolio data
    useEffect(() => {
        if (portfolioData && portfolioData.length > 0) {
            setPortfolioItems(portfolioData);
            setLoading(false); // stop loading once data exists
        }
    }, []);

    function Page(item) {
        const safeSections = item.sections || [];
        const safeBenefits = item.whyGood || [];
        const safeSliderImages = item.sliderImages || [];
        navigate(`/portfolio/${item.id}`, {
           
        });
    }

    if (loading) {
        // Show spinner while loading
        return (
            <div className="spinnerWrapper" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                <Spinner />
            </div>
        );
    }
   
    return (
        <div className="ourPorfolioWrapper">
            <div className="ourPorfolioTitle">
                <h2>Our Work</h2>
            </div>
            <div className="ourPortfolio">
                
                    {portfolioItems.map((item, index) => {
                        // only start a pair on EVEN index
                        if (index % 2 !== 0) return null;

                        const topItem = item;
                        const bottomItem = portfolioItems[index + 1];

                        return (
                            <div className="portfolioPair" key={topItem.id}>

                                {/* TOP */}
                                <div className="topOurPortfolioBlock">
                                  
                                        <SinglePortfolio
                                            image={topItem.image}
                                            description={topItem.description}
                                            title={topItem.title}
                                            siteUrl={`/portfolio/${topItem.id}`}
                                            onClick={() => Page(topItem)}
                                        />
                                    
                                </div>

                                {/* BOTTOM */}
                                {bottomItem && (
                                    <div className="bottomOurPortfolioBlock">
                                        
                                            <SinglePortfolio
                                                image={bottomItem.image}
                                                description={bottomItem.description}
                                                title={bottomItem.title}
                                                siteUrl={`/portfolio/${bottomItem.id}`}
                                                onClick={() => Page(bottomItem)}
                                            />
                                        
                                    </div>
                                )}

                            </div>
                        );
                    })}
               
            </div>
        </div>
    );
}

export default OurPortfolio;
