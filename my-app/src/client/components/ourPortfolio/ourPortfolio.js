import SinglePortfolio from "./singlePorfolio/singlePortfolio";
import portfolioData from "../../data/portfolio/porfolioData.json";
import Ecom from "../../../resources/displayImages/e-com.png";
import { useNavigate } from "react-router-dom";
import "./ourPortfolio.css";

function OurPortfolio() {
    const navigate = useNavigate();

    return (
        <div className="ourPorfolioWrapper">
            <div className="ourPortfolio">

                {portfolioData.map(item => (
                    <div key={item.id} className="portfolioPair">

                        {/* TOP */}
                        <div className="topOurPortfolioBlock">
                            <SinglePortfolio
                                image={Ecom}
                                title={item.topTitle || item.title}
                                siteUrl={item.siteUrl}
                                onClick={() => navigate(`/portfolio/${item.id}`)}
                            />
                        </div>

                        {/* BOTTOM */}
                        <div className="bottomOurPortfolioBlock">
                            <SinglePortfolio
                                image={Ecom}
                                title={item.bottomTitle || item.title}
                                siteUrl={item.siteUrl}
                                onClick={() => navigate(`/portfolio/${item.id}`)}
                            />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default OurPortfolio;
