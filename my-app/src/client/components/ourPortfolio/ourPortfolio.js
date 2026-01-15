import SinglePortfolio from "./singlePorfolio/singlePortfolio";
import portfolioData from "../../data/portfolio/porfolioData.json";
import Ecom from "../../../resources/displayImages/e-com.png";
import { useNavigate } from "react-router-dom";
import "./ourPortfolio.css";




function OurPortfolio() {
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
        <div className="ourPorfolioWrapper">
            <div className="ourPorfolioTitle">
                <h2>Our Work </h2>
            </div>
            <div className="ourPortfolio">

                {portfolioData.map((item, index) => {
                    // only start a pair on EVEN index
                    if (index % 2 !== 0) return null;

                    const topItem = item;
                    const bottomItem = portfolioData[index + 1];

                    return (
                        <div className="portfolioPair" key={topItem.id}>

                            {/* TOP */}
                            <div className="topOurPortfolioBlock">
                                <SinglePortfolio
                                    image={Ecom}
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
                                        image={Ecom}
                                        description={topItem.description}
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
