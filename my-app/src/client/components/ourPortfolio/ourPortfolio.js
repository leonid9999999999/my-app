import SinglePortfolio from "./singlePorfolio/singlePortfolio"
import Ecom from "../../../resources/displayImages/e-com.png"
import "./ourPortfolio.css"

function OurPortfolio(){
    return(
        <div className="ourPorfolioWrapper">
            <div className="ourPortfolio">
                <div className="topOurPortfolioBlock">
                    <SinglePortfolio image={Ecom}
                        title="E-Commerce SaleStaff"
                        siteUrl="https://example.com"
                        description="
                                    Big Blue Campers are a specialist VW campervan hire 
                                    company in Worcestershire offering modern Volkswagen campervan hire.
                                    "
                    />
                </div>
                <div className="bottomOurPortfolioBlock">
                    <SinglePortfolio image={Ecom}
                        title="E-Commerce SaleStaff"
                        siteUrl="https://example.com"
                    />
                </div>
                <div className="topOurPortfolioBlock">
                    <SinglePortfolio image={Ecom}
                        title="E-Commerce SaleStaff"
                        siteUrl="https://example.com"
                    />
                </div>
                <div className="bottomOurPortfolioBlock">
                    <SinglePortfolio image={Ecom}
                        title="E-Commerce SaleStaff"
                        siteUrl="https://example.com"
                    />
                </div>
                
            </div>
        </div>
    )
}
export default OurPortfolio