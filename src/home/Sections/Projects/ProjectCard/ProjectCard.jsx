import { FaCode } from "react-icons/fa6";
import "./ProjectCard.scss";
import "../../../../styles/animations.scss";

function ProjectCard({ projectInfo }) {
  const { title, description, techs, link, gradient } = projectInfo;

  return (
    <div className="project-card" style={{ "--project-gradient": gradient }}>
      <div className="expandable-line"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="techs">
        {techs.map((tech, index) => (
          <div className="tech-item text-small bold" key={index}>
            {tech}
          </div>
        ))}
      </div>
      <div className="line"></div>
      <a target="_blank" className="link bold animated-btn" href={link}><FaCode className="icon" /> Projeyi İncele</a>
    </div>
  );
}

export default ProjectCard;
