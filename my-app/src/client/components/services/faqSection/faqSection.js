import { useState } from "react";
import "./faqSection.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We design and build responsive websites and digital products, including porfolios, business websites, web applications, e-commerce platforms / helpers, educational websites, and fully custom solutions tailored to your needs.",
  },
  {
    question: "How can I pay?",
    answer:
      "All pricing are custom and based on your needs and project scope. You pay after our first meeting.",
  },
  {
    question: "Can you design my website from scratch?",
    answer:
      "Yes. We can design your website entirely from scratch, including UI/UX design, layout, content structure, and copywriting. We can also work with existing designs and improve or adapt them to better match your goals.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimised for desktop, tablet, and mobile devices.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes. If you need custom features, integrations, or a unique web application,  we tailor the solution specifically to your business requirements.",
  },
  {
    question: "What can be included in a brand identity project?",
    answer:
      "A brand identity project can include logo design, color palette development, typography selection, brand guidelines, business cards, letterheads, and digital assets. Additional elements like packaging, signage, or social media templates can also be included.",
  },
  {
    question: "Do I really need a brand identity?",
    answer:
      "Not every business needs a full brand identity system, but cohesive visual elements help build credibility, trust, and recognition. We’ll help you choose the right scope for your business stage and goals.",
  },
  {
    question: "Can you refresh or improve my existing logo or branding?",
    answer:
      "Yes. We offer brand refresh services to modernise and refine your existing logo or branding while keeping brand recognition intact.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects take between 4–12+ weeks, depending on complexity, features, and feedback cycles. Larger or custom projects may take longer, and we always provide a clear timeline upfront.",
  },
  {
    question: "How much does a website or project cost?",
    answer:
      "All pricing are custom and based on your needs and project scope. We also offer bundled packages on our website so you can get an approximate idea of pricing and included services. Usually we have extras that you can choose for your solution",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Hosting is paid by the client, but we handle the full setup and automation process to make it simple and stress-free.",
  },
  {
    question: "Can you help with website content and text?",
    answer:
      "Yes. We can create all website content from scratch or refine and adapt your existing text to better match your brand and audience.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "To get started, we need your name, email address, phone number, company name (if applicable), and a brief description of what you’re looking to build, any ideas? We’ll guide you through the rest.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "We typically respond within 48 hours after receiving your inquiry.",
  },
  {
    question: "How do meetings work?",
    answer:
      "After a successful booking, we can meet via Google Meet, Zoom, or in person if you’re based in the UK.",
  },
  {
    question: "Where are you based?",
    answer:
      "We are based in Cardiff, United Kingdom, and work with clients both locally and internationally.",
  },
  {
    question: "Who are you?",
    answer:
      "We are degree-qualified software engineers working as freelancers. Although we’re a fresh studio, we’ve helped businesses across various industries with modern digital solutions.",
  },
  {
    question: "Do you offer support after the project is completed?",
    answer:
      "Yes. We offer ongoing support, updates, and improvements after launch, depending on your needs.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="faq-question"
                onClick={() => toggleItem(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
