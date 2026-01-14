import { useState } from "react";
import "./faqSection.css";

const faqs = [
  {
    question: "What can be included in a brand identity project?",
    answer:
      "A comprehensive brand identity project typically includes logo design, color palette development, typography selection, brand guidelines, business card design, letterhead, and digital assets. We tailor each project to your specific needs and can include additional elements like packaging design, signage, or social media templates.",
  },
  {
    question: "Do I really need a full brand identity?",
    answer:
      "While not every business needs an extensive brand identity system, having cohesive visual elements helps establish credibility and recognition. We can work with you to determine the right scope for your business stage and goals.",
  },
  {
    question: "Can you help tweak my existing logo?",
    answer:
      "Absolutely! We offer brand refresh services where we can refine and modernize your existing logo while maintaining brand recognition.",
  },
  {
    question: "How long does a brand identity project take?",
    answer:
      "A typical brand identity project takes 6–12 weeks from initial consultation to final delivery, depending on scope and feedback cycles.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "We’ll need details about your business, audience, competitors, goals, and any existing brand materials. A creative brief helps us kick things off properly. Rest its our job",
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
