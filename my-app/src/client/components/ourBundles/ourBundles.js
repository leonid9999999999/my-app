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
    title="Portfolio Website"
    description="Showcase your work, skills, and achievements with a modern portfolio website designed to build credibility and attract new clients, employers, or business opportunities."
    price="£299"
    price2="£699"
    includedServices={[
        "UI/UX Design",
        "Web Development",
        "Hosting Setup",
    ]}
    whatYouGet={[
        "Custom Design",
        "Modern Tech Stack",
        "Fully Responsive Design",
        "Portfolio & CV Sections",
        "Contact Form",
        "Social Media Integration",
        "Live Hosting Setup"
    ]}
/>

<SingleBundle
    image={Ecom}
    title="E-Commerce Store"
    description="Launch a professional online store with secure payments, product management, and a seamless shopping experience that helps your business grow."
    price="£999"
    price2="£2,499"
    includedServices={[
        "UI/UX Design",
        "Web Development",
        "Login/Register",
        "Hosting Setup",
        "Ongoing Support"
    ]}
    whatYouGet={[
        "Custom Store Design",
        "Shopping Cart & Checkout",
        "Product Management",
        "Payment Integration",
        "Responsive Design",
        "SEO Foundations",
        "Security & Performance Setup"
    ]}
/>

<SingleBundle
    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1769002652/pool-2_ejxowv.png"}
    title="Business Website"
    description="Build trust, showcase your services, and generate new enquiries with a professional website tailored to your business."
    price="£599"
    price2="£1,299"
    includedServices={[
        "UI/UX Design",
        "Full Website Development",
        "Hosting & Domain Setup",
        "SEO Foundations"
    ]}
    whatYouGet={[
        "Custom Professional Design",
        "5–10 Website Pages",
        "Responsive Layout",
        "Contact Forms",
        "Service Pages",
        "Social Media Integration",
        "SEO Optimisation",
        "Performance & Security Setup"
    ]}
/>

<SingleBundle
    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1769008402/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_1051_ppwxfe.png"}
    title="Landing Page"
    description="A focused, conversion-driven landing page designed to turn visitors into customers, enquiries, or bookings."
    price="£249"
    price2="£499"
    includedServices={[
        "UI/UX Design",
        "Front-End Development",
        "Third-Party Integrations",
    ]}
    whatYouGet={[
        "Custom Modern Design",
        "Responsive Layout",
        "Call-To-Action Sections",
        "Contact Forms",
        "Analytics Integration",
        "Live Hosting Setup"
    ]}
/>

<SingleBundle
    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1768500914/Screenshot_2026-01-15_at_18.14.24_ug1qsi.png"}
    title="Custom MERN Platform"
    description="A custom-built business platform designed to automate workflows, manage operations, and support long-term business growth."
    price="£2,999"
    price2="Custom"
    includedServices={[
        "Product Strategy",
        "System Architecture",
        "UI/UX Design",
        "Full MERN Development"
    ]}
    whatYouGet={[
        "Authentication & Roles",
        "Admin Dashboard",
        "Business Automation",
        "API Integrations",
        "Cloud Infrastructure",
        "Advanced Security",
        "Scalable Architecture"
    ]}
/>

<SingleBundle
    image={"https://res.cloudinary.com/dibygfenr/image/upload/v1768576846/Screenshot_2026-01-16_at_15.20.39_oyycbt.png"}
    title="Web Application"
    description="A scalable web application tailored to your business processes, whether you need booking systems, dashboards, internal tools, or customer portals."
    price="£1,499"
    price2="£3,999"
    includedServices={[
        "UI/UX Design",
        "Front-End & Back-End Development",
        "API Integrations",
        "Cloud & Database Setup"
    ]}
    whatYouGet={[
        "Authentication System",
        "Custom Business Logic",
        "Admin Dashboard",
        "Database Integration",
        "Cloud Deployment",
        "Responsive Interface",
        "Scalable Architecture"
    ]}
/>
            </div>
        </div>
    )
   
}

export default OurBundles