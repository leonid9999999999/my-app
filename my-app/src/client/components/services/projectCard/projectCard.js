import "./projectCard.css"

function ProjectCard({ onClick,stylep,styleh3,tag, title, text, image }) {
    return (
        <div onClick={onClick}className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <span className="work_tag">{tag}</span>
            <h3 style={styleh3} className="project-title">{title}</h3>
            <p style={stylep} className="project-tags">{text}</p>

            <button className="project-link">
                <span>Explore</span>
               
            </button>
        </div>
    );
}

export default ProjectCard