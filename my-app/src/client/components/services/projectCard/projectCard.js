import "./projectCard.css"

function ProjectCard({ image, title, tags }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>

            <h3 className="project-title">{title}</h3>
            <p className="project-tags">{tags}</p>

            <button className="project-link">
                <span>Explore</span>
               
            </button>
        </div>
    );
}

export default ProjectCard