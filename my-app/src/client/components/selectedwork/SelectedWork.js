import "./SelectedWork.css";
import OneSelectionCard from "./oneSelectionCard";

import servicesData from "../../data/services/services.json";
import ProjectCard from "../services/projectCard/projectCard";

function SelectedWork() {
  return (
    <section className="selected-work">
      <div className="selected-work__container">
        <h2 className="selected-work__title">Selected Work</h2>

        <p className="selected-work__subtitle">
          Recent projects delivered for businesses across the UK and Europe.
        </p>

        <div className="selected-work__grid">

          {/*Work blokc can be displayed here  */}

          {/* {servicesData.map((project) => (
            <OneSelectionCard
              key={project.id} // Important: Always include a unique key
              tag={project.tag}
              title={project.title}
              text={project.text}
              image={project.mainImage}
            />
            
          ))} */}
          
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
