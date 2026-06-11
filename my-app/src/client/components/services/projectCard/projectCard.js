import "./projectCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProjectCard({ onClick, tag, title, text, image }) {
  return (
    <div onClick={onClick} className="project-card">
      <div className="project-image">
        <LazyLoadImage loading="lazy" effect="blur" src={image} alt={title} />
        <div className="image-overlay" />
      </div>

      <div className="project-content">
        <span className="work-tag">{tag}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-text">{text}</p>

        <div className="project-link">
          <span>View project</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
