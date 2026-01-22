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
                    description="Small But Energetic Website With Big Impact,
                          Portfolios showcase your work, build professional credibility, and help you attract employers to land jobs. 
                          "
                    price="£100"
                    price2="£200"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Hosting Setup",
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Modern Tech Stack",
                        "Fully Responsive Design",
                        "Online CV/ How To Contact You",
                        "Social Media Integration",
                        "FREE Hosting/ Online Availability"
                    ]}
                />
                <SingleBundle
                    image={Ecom}
                    title="E-Commerce Solution"
                    description="Whether you are launching your first online store or looking to scale an existing business with a 
                                fresh look, I provide the expertise to turn your vision into a high-performing e-commerce site. 
                              "
                    price="£600"
                    price2="£900"
                    includedServices={[
                        "UI/UX Design",
                        "Web Development",
                        "Login/Register",
                        "Hosting Setup",
                        "Ongoing Support"
                    ]}
                    whatYouGet={[
                        "Custom Design",
                        "Modern Tech Stack",
                        "Fully Responsive Design",
                        "Open Your Doors 24/7",
                        "Smooth Shopping Experience",
                        "Social Media Integration",
                        "From Single Items To Thoushands",
                        "Basic SEO, so Google Loves You",
                        "Security, Performance & Scalability Setup",
                    ]}
                />
                <SingleBundle
                    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1769002652/pool-2_ejxowv.png"}
                    title="Complete Website"
                    description="A professional, high-impact website designed to showcase your services, build trust with clients, and strengthen your online presence."
                    price="£400"
                    price2="£700"
                    includedServices={[
                        "UI/UX Design",
                        "Login/Register",
                        "Full Website Development",
                        "Hosting & Domain Setup"
                    ]}
                    whatYouGet={[
                        "Custom Professional Design",
                        "Modern Tech Stack",
                        "Fully Responsive Across All Devices",
                        "About, Services & Contact Pages",
                        "Social Media Integration",
                        "Live Hosting & Online Availability",
                        "Basic SEO Optimisation for Google Visibility",
                        "Security, Performance & Scalability Setup"
                    ]}
                />

                <SingleBundle
                    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1769008402/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_1051_ppwxfe.png"}
                    title="Landing Pages"
                    description="A modern, custom-built landing page designed to convert visitors into customers. The perfect solution to elevate your online presence."
                    price="£200"
                    price2="£300"
                    includedServices={[
                        "UI/UX Design",
                        "Front-End Development",
                        "Third-Party Integrations",
                    ]}
                    whatYouGet={[
                        "Custom Modern Design",
                        "Modern Tech Stack",
                        "Fully Responsive Layout",
                        "Social Media Integration",
                        "Live Hosting & Online Availability"
                    ]}
                />
                <SingleBundle
                    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1768500914/Screenshot_2026-01-15_at_18.14.24_ug1qsi.png"}
                    title="Custom MERN Platform"
                    description="A powerful, all-in-one custom platform built with the MERN stack to streamline operations, automate workflows, and scale with your business. Designed for companies that need more than a standard website."
                    price="£800"
                    price2="£1500"
                    includedServices={[
                        "Product Strategy & System Architecture",
                        "UI/UX Design",
                        "Full MERN Stack Development",
                        "API, Database & Cloud Integration"
                    ]}
                    whatYouGet={[
                        "User Roles, Authentication & Permissions",
                        "Custom Dashboards & Admin Panels",
                        "Business Process Automation",
                        "Advanced API & Third-Party Integrations",
                        "Cloud Deployment (AWS / Scalable Infrastructure)",
                        "Security, Performance & Scalability Setup"
                    ]}
                />
                <SingleBundle
                    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1768576846/Screenshot_2026-01-16_at_15.20.39_oyycbt.png"}
                    title="Web Application"
                    description="A custom-built web application designed to automate processes, manage users, and handle complex workflows. Ideal for booking systems, communication platforms, and data-driven solutions."
                    price="£600"
                    price2="£900"
                    includedServices={[
                        "UI/UX Design",
                        "Front-End & Back-End Development",
                        "API & Third-Party Integrations",
                        "Cloud & Database Setup"
                    ]}
                    whatYouGet={[
                        "User Authentication (Login & Registration)",
                        "Modern Tech Stack",
                        "Custom Application Logic & Automation",
                        "Secure API & Database Integration",
                        "Scalable Architecture (AWS / Cloud Ready)",
                        "Fully Responsive Application Interface",
                        "Deployment & Live Hosting"
                    ]}
                />
            </div>
        </div>
    )
   
}

export default OurBundles