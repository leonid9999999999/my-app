import "./splitVisualSection.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SplitVisualSection = ({ sections = [],styles,  }) => {
  console.log(sections)
  return (
    <section className="split-section">
      {sections.map((section, index) => {
        const isReversed = section.imagePosition === "left";

        return (
          <div
            key={index}
            className={`split-row ${isReversed ? "reverse" : ""}`}
          >
            <div className="split-text">
              <h2>{section.title}</h2>

              {section.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              {section.linkText && (
                <a href={"/ContactUs"} className="split-link">
                  {section.linkText}
                </a>
              )}
            </div>

            <div
              className={`split-image ${
                isReversed ? "split-image-bottom" : "split-image-top"
              }`}
            >
              
              <LazyLoadImage loading="lazy" className="imageSection" style={styles} src={section.image} alt={section.title} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SplitVisualSection;

