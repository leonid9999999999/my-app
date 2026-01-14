import SplitVisualSection from "../splitSection/splitVisualSection"
import eCom2 from "../../../resources/displayImages/ecomMore.png"
import "./portfolioExample.css"
import { borderRadius, height, width } from "@mui/system"
import ImageSlider2 from "../imageSlider2/imageSlider2"

function PortfolioExample(){
    const images = [
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg",
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg"
    ];

    return(
        <div className="portfolioExampleWrapper">
            <div className="portfolioExampleBlock">
                <div className="portfolioPageTitle">
                    <h2>E-Commerce Website for Clothing Reseller</h2>

                </div>
                <div className="portfolioSliderBlock">
                    <div className="porfolioSlider">
                        <ImageSlider2 images={images} />
                    </div>
                    
                </div>
                <div className="portfolioMainInfoBlock">
                    {/* <div className="portfolioMainInfoBlockTitle">
                        <h3>Website for Clothing Resller</h3>
                    </div> */}
                    <div className="explanationInfoBlock">
                        <SplitVisualSection
                            sections={[
                                {
                                    title: "Bridge Betweeen Customer & You",
                                    paragraphs: [
                                        "We built this platform to be a bridge between you and your customers, using technology to make them feel understood rather than overwhelmed. We engineered smart search capabilities and intuitive filtering and sorting so that finding the perfect item feels like a delightful discovery, not a tedious hunt. Recognising that life moves fast, we ensured a fully responsive design that adapts beautifully to any device, giving your users the freedom to shop wherever they feel most comfortable. Finally, we integrated High-Qulity media such as videos,images,products, multiple payment options to ensure that the moment of purchase is not just secure, but effortless, leaving them with a sense of trust and satisfaction every time they visit.",
                                    ],
                                    image: eCom2,
                                    imagePosition: "right",
                                    styles: {borderRadius: 15, height: 400, width: 600}
                                },
                                {
                                    title: "Automate Heavy Lifting",
                                    paragraphs: [
                                        "Behind the scenes, we’ve engineered a powerful command center designed to give you complete peace of mind and the freedom to focus on growth. We integrated robust Inventory Management and a streamlined Order Management System to automate the heavy lifting, ensuring you never have to worry about overselling or losing track of a shipment. To help your brand find its voice and audience, we built in advanced Marketing and SEO tools that put you on the map, all while safeguarding your reputation with top-tier SSL security.",
                                        "Finally, we empowered you with a crystal-clear Analytics Dashboard, turning complex data into actionable insights so you can make every business decision with absolute confidence.",
                                    ],
                                    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
                                    imagePosition: "left",
                                    styles: { borderRadius: 15, height: 400, width: 600 }
                                }
                            ]}
                        />
                    </div>
                </div>
                <div className="moreInfromationAboutProjectWrapper">
                    <div className="moreInfromationAboutProject">
                        <p>
                            What We Developed: We have deployed a high-performance, mobile-first e-commerce platform specifically engineered for the unique demands of
                            the fashion resale market. Unlike standard retail sites, this platform is built on a "Single-SKU" architecture, designed to handle one-off
                            vintage and pre-loved items without the risk of double-selling.
                        </p>
                        <div class="why-it-is-good">
                            <h2>Why It Is Good</h2>

                            <ul>
                                <li>
                                    <strong>Operational Efficiency:</strong>
                                    The backend automates the complex logistics of resale—from stock intake to generating Royal Mail postage labels—reducing manual admin time by roughly 40%.
                                </li>

                                <li>
                                    <strong>High Conversion UX:</strong>
                                    We tackled the biggest barrier in resale—trust—by implementing a high-fidelity product showcase with zoom capabilities and detailed measurement guides, drastically reducing return rates.
                                </li>

                                <li>
                                    <strong>Scalability:</strong>
                                    The infrastructure is robust enough to handle high-traffic stock drops, ensuring the site remains stable during peak release times.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioExample