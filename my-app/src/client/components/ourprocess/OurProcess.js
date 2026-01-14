import { useEffect, useRef, useState } from "react";
import "./OurProcess.css";
import strategyImg from '../../../resources/images/strategy.png';
import designImg from '../../../resources/images/design.png';
import discoveryImg from '../../../resources/images/discovery.png';
import developmentImg from '../../../resources/images/development.png';
import launchImg from '../../../resources/images/launch.png';



const STEPS = [
  {
    title: "Discovery",
    text: "We explore your idea, audience and goals to build a strong foundation.",
    image: discoveryImg,
  },
  {
    title: "Strategy",
    text: "We define structure, architecture and technical direction.",
    image: strategyImg,
  },
  {
    title: "Design",
    text: "We craft clean, modern interfaces focused on clarity and conversion.",
    image: designImg,
  },
  {
    title: "Development",
    text: "We build scalable, high-performance solutions with clean code.",
    image: developmentImg,
  },
  {
    title: "Launch",
    text: "We test, deploy and refine the product for real-world success.",
    image: launchImg,
  },
];

export default function OurProcess() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max(-rect.top / (rect.height - window.innerHeight), 0),
        1
      );

      setVisible(progress > 0 && progress < 1);

      const index = Math.min(
        STEPS.length - 1,
        Math.floor(progress * STEPS.length)
      );

      setStep(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className={`process ${visible ? "is-visible" : ""}`}>
      <div className="process-sticky">

        {/* HEADER */}
        <header className="process-header">
          <h2>How we turn ideas into products</h2>
        </header>

        {/* TIMELINE FULL WIDTH */}
        <div className="process-timeline">
          <div className="timeline-line">
            <span
              className="timeline-progress"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          <div className="timeline-steps">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`timeline-circle ${
                  i <= step ? "visible" : ""
                } ${i === step ? "active" : ""}`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="process-content">
          <div className="process-image">
            <img src={STEPS[step].image} alt={STEPS[step].title} />
          </div>

          <div className="process-text">
            
            <h3>{STEPS[step].title}</h3>
            <p>{STEPS[step].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
