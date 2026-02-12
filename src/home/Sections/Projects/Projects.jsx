import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard/ProjectCard";
import projects from "../../../data/projects-details";
import "../../../styles/animations.scss";
import "./Projects.scss";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1>
        <span className="text-gradient text-gradient--blue">Hayata geçirdiğimiz</span> projeler
      </h1>
      <p className="text-lead">
        Her proje bir öğrenme serüveni. Gerçek problemlere gerçek çözümler
        üretirken, modern teknolojileri deneyimliyoruz.
      </p>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard projectInfo={project} key={index} />
        ))}
      </div>
      <a
        target="_blank"
        href="https://github.com/orgs/grideayazilim/repositories"
        className="visit-btn bold animated-btn"
      >
        Açık kaynak projelerimizi incele <FaArrowRight className="icon" />
      </a>
    </section>
  );
}

export default Projects;
