// import "./splitVisualSection.css";

// const SplitVisualSection = () => {
//   return (
//     <section className="split-section">
//       {/* TOP SECTION */}
//       <div className="split-row">
//         <div className="split-text">
//           <h2>Built for tomorrow. Designed for you.</h2>
//           <p>
//             No two organisations are the same — and neither are our websites. 
//             We create bespoke digital experiences on flexible, future-ready platforms,
//             designed around your goals and built to adapt as your business evolves.
//           <p>
//             With clean code and considered architecture at the core, our websites are fast,
//             reliable, and crafted to perform — today, tomorrow, and beyond.
//           </p>
//           </p>
//           <a href="/" className="split-link">
//             Talk to our website experts →
//           </a>
//         </div>

//         <div className="split-image split-image-top">
//           <img
//             src="https://images.unsplash.com/photo-1558655146-9f40138edfeb"
//             alt="Website mockups"
//           />
//         </div>
//       </div>

//       {/* BOTTOM SECTION */}
//       <div className="split-row reverse">
//         <div className="split-image split-image-bottom">
//           <img
//             src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//             alt="Team working"
//           />
//         </div>

//         <div className="split-text">
//           <h2>Experience with purpose.</h2>
//           <p>
//            Great design goes beyond appearance. We focus on how users move, think, and interact, creating seamless journeys that feel natural and intuitive from the first click to the last.


//           </p>
//           <p>
//             Every interaction is deliberate. Every detail earns its place. The result is a website
//             that doesn’t just look good — it works hard for your business.
//           </p>
//           <a href="/" className="split-link">
//             Brief us today →
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SplitVisualSection;

import "./splitVisualSection.css";

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
                <a href={section.linkUrl} className="split-link">
                  {section.linkText}
                </a>
              )}
            </div>

            <div
              className={`split-image ${
                isReversed ? "split-image-bottom" : "split-image-top"
              }`}
            >
              <img style={styles} src={section.image} alt={section.title} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SplitVisualSection;

