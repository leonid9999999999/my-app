import "./projectCard.css";

function ProjectCard({ onClick, tag, title, text, image }) {
  return (
    <div onClick={onClick} className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
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
