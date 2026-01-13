import SinglePortfolio from "./singlePorfolio/singlePortfolio"
import Ecom from "../../../resources/displayImages/e-com.png"
import "./ourPortfolio.css"

function OurPortfolio(){
    return(
        <div className="ourPorfolioWrapper">
            <div className="ourPortfolio">
                <SinglePortfolio image={Ecom}
                    title="Barbell Training Complex"
                    siteUrl="https://example.com"
                />
            </div>
        </div>
    )
}
export default OurPortfolio