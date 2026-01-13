import './ourBundles.css';
import SingleBundle from './singleBundle/singleBundle';
import PortfolioExample from "../../../resources/displayImages/portfolioExample.png"
import Ecom from "../../../resources/displayImages/e-com.png"

function OurBundles(){
    return(
        <div className='ourBunlesWrapper'>

            <div className='ourBundlesBlock'>
                <SingleBundle
                    image={PortfolioExample}
                    title="Online Porfolio"
                    description="Small But Energetic Website with Big Impact,
                          Portfolios showcase your work, build professional credibility, and help you attract employers to land jobs. 
                          "
                    price="£200"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Hosting Setup"
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Fully Responsive Design",
                        "Online CV/ How To Contact You",
                        "Social Media Integration",
                        "Hosting/ Online Availability"
                    ]}
                />
                <SingleBundle
                    image={Ecom}
                    title="E-Commerce Solution"
                    description="Whether you are launching your first online store or looking to scale an existing business with a 
                                fresh look, I provide the expertise to turn your vision into a high-performing e-commerce site. 
                              "
                    price="£600"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Hosting Setup",
                        "Ongoing Support"
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Fully Responsive Design",
                        "Open Your Doors 24/7",
                        "Smooth Shopping Experience",
                        "Social Media Integration",
                        "From Single Items To Thoushands",
                        "Basic SEO, so Google Loves You",
                    ]}
                />
                <SingleBundle
                    image={PortfolioExample}
                    title="Complete Website"
                    description="Small But Energetic Website with Big Impact,
                              Portfolios showcase your work, build professional credibility, and help you attract employers to land jobs. 
                              "
                    price="£400"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Hosting Setup"
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Fully Responsive Design",
                        "Online CV/ How To Contact You",
                        "Social Media Integration",
                        "Hosting/ Online Availability"
                    ]}
                />
                <SingleBundle
                    image={PortfolioExample}
                    title="Landing Pages"
                    description="Small But Energetic Website with Big Impact,
                              Portfolios showcase your work, build professional credibility, and help you attract employers to land jobs. 
                              "
                    price="£200"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Hosting Setup"
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Fully Responsive Design",
                        "Online CV/ How To Contact You",
                        "Social Media Integration",
                        "Hosting/ Online Availability"
                    ]}
                />
            </div>
        </div>
    )
   
}

export default OurBundles