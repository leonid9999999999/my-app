import { useEffect, useRef, useState } from "react";
import "./OurProcess.css";

import strategyImg from "../../../resources/images/strategy.png";
import designImg from "../../../resources/images/design.png";
import discoveryImg from "../../../resources/images/discovery.png";
import developmentImg from "../../../resources/images/development.png";
import launchImg from "../../../resources/images/launch.png";

const STEPS = [
  {
    title: "Discovery",
    text: "We start by understanding how your business actually works - your customers, your goals, and what’s currently holding you back. This stage is about clarity, not assumptions.",
    image: discoveryImg,
  },
  {
    title: "Strategy",
    text: "Once we understand the direction, we shape a clear plan. We define structure, priorities, and the user journey so everything has a purpose before design begins.",
    image: strategyImg,
  },
  {
    title: "Design",
    text: "We design clean, modern interfaces that feel natural to use. Every layout is focused on trust, clarity, and guiding visitors toward action without friction.",
    image: designImg,
  },
  {
    title: "Development",
    text: "We turn the design into a fast, responsive product built with scalable code. Everything is optimised for performance, mobile experience, and real-world usage.",
    image: developmentImg,
  },
  {
    title: "Launch",
    text: "Before going live, we test everything carefully to make sure it works smoothly. After launch, we monitor performance and make small adjustments where needed.",
    image: launchImg,
  },
];

export default function OurProcess() {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".App");
    if (!scrollContainer) return;

    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const containerHeight = scrollContainer.clientHeight;

      const progress = Math.min(
        Math.max(-rect.top / (rect.height - containerHeight), 0),
        1
      );

      setVisible(progress > 0 && progress < 1);

      // ✅ FIX: теперь доходит до 5 шага (Launch)
      const index = Math.min(
        STEPS.length - 1,
        Math.floor(progress * STEPS.length)
      );

      setStep(index);
    };

    scrollContainer.addEventListener("scroll", onScroll);
    onScroll();

    return () =>
      scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`process ${visible ? "is-visible" : ""}`}
    >
      <div className="process-sticky">

        {/* HEADER */}
        <header className="process-header">
          <h2>From Idea to Launch</h2>
        </header>

        {/* TIMELINE */}
        <div className="process-timeline">
          <div className="timeline-line">
            <span
              className="timeline-progress"
              style={{
                width: `${((step + 1) / STEPS.length) * 100}%`,
              }}
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
            <img
              src={STEPS[step].image}
              alt={STEPS[step].title}
            />
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