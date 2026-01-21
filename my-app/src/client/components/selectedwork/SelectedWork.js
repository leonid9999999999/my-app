import { useState } from "react";
import "./SelectedWork.css";
import ProjectSlider from "./ProjectSlider";

/* === IMAGES === */
// Pool business
import pool1 from "../../../resources/images/pool-1.jpg";
import pool2 from "../../../resources/images/pool-2.jpg";
import pool3 from "../../../resources/images/pool-3.jpg";
import pool4 from "../../../resources/images/pool-4.jpg";

// Student portfolio
import student1 from "../../../resources/images/student-1.jpg";
import student2 from "../../../resources/images/student-2.jpg";
import student3 from "../../../resources/images/student-3.jpg";
import student4 from "../../../resources/images/student-4.jpg";

// Store
import shop1 from "../../../resources/images/shop-1.jpg";
import shop2 from "../../../resources/images/shop-2.jpg";
import shop3 from "../../../resources/images/shop-3.jpg";
import shop4 from "../../../resources/images/shop-4.jpg";

function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      tag: "Business Website",
      title: "Pool Construction Company",
      description:
        "Service website focused on trust, clarity, and collecting client requests.",
      slides: [
        { type: "image", src: pool1 },
        { type: "image", src: pool2 },
        { type: "image", src: pool3 },
        { type: "image", src: pool4 },
        {
          type: "info",
          title: "Pool Construction Business Website",
          text:
            "A clean and simple business website designed to clearly present services and help clients easily submit requests. Built with usability and trust in mind.",
        },
      ],
    },
    {
      tag: "Portfolio Website",
      title: "Student Portfolio",
      description:
        "Personal portfolio that helped a student showcase skills and land a job.",
      slides: [
        { type: "image", src: student1 },
        { type: "image", src: student2 },
        { type: "image", src: student3 },
        { type: "image", src: student4 },
        {
          type: "info",
          title: "Student Portfolio Website",
          text:
            "A minimalist portfolio website focused on presenting projects, skills, and personality. Helped the owner successfully find a full-time position.",
        },
      ],
    },
    {
      tag: "Online Store",
      title: "Computer Accessories Shop",
      description:
        "Small e-commerce website for selling computer accessories.",
      slides: [
        { type: "image", src: shop1 },
        { type: "image", src: shop2 },
        { type: "image", src: shop3 },
        { type: "image", src: shop4 },
        {
          type: "info",
          title: "E-Commerce Accessories Store",
          text:
            "Compact online store selling computer accessories such as mice, cables, and desk mats. Focused on simplicity and smooth checkout experience.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="selected-work">
        <div className="selected-work__container">
          <h2 className="selected-work__title">Selected Work</h2>

          <p className="selected-work__subtitle">
            Examples of websites we can build — clean, functional, and focused on results.
          </p>

          <div className="selected-work__grid">
            {projects.map((project, i) => (
              <div className="selected-work__card" key={i}>
                <div
                  className="selected-work__image"
                  onClick={() => setActiveProject(project)}
                >
                  <span className="selected-work__open">View</span>
                </div>

                <span className="selected-work__tag">{project.tag}</span>
                <h3 className="selected-work__card-title">{project.title}</h3>
                <p className="selected-work__card-text">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeProject && (
        <ProjectSlider
          slides={activeProject.slides}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}

export default SelectedWork;
