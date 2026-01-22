import Button from "../../Tools/button/button";
import "./singleBundle.css";

function SingleBundle({
    image,
    title,
    description,
    price,
    price2,
    includedServices = [],
    whatYouGet = [],
    buttonText = "Choose This Bundle"
}) {
    return (
        <div className="singleBundleWrapper">
            <div className="singleBundle">
                <img src={image} alt={title} />

                <div className="infoBlock">
                    {/* TITLE */}
                    <div className="bundleTitle">
                        <h2>{title}</h2>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="briefDescription">
                        <p>{description}</p>
                    </div>

                    {/* PRICE */}
                    <div className="priceDescription">
                        <h3 className="price">{price} - {price2}</h3>
                    </div>

                    <div className="bundleMainInfo">
                        {/* INCLUDED SERVICES */}
                        <div className="topMainInfo">
                            <div className="titleTop">
                                <h4>Included Services</h4>
                            </div>
                            <ul>
                                {includedServices.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* WHAT YOU GET */}
                        <div className="bottomMainInfo">
                            <div className="titleBottom">
                                <h4>What You Get</h4>
                            </div>
                            <ul>
                                {whatYouGet.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* <Button text={buttonText} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBundle;
