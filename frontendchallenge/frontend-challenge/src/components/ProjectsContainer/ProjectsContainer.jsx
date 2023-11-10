import React, { useContext } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { SiteContext } from "../../context/SiteContext";
import './projectscontainer.css'

function ProjectsContainer() {
  const { texts } = useContext(SiteContext);
  return (
    <div className="projects--container">
      <p className="techstack--heading">{texts.headings.projects}</p>
      {texts.projects.map((item) => {
        return (
          <ProjectCard
            key={item.id}
            projectName={item.projectName}
            projectInfo={item.projectInfo}
            tags={item.tags}
            projectUrl={item.projectUrl}
            projectRepo={item.projectRepo}
            projectImg={item.projectImg}
          />
        );
      })}
    </div>
  );
}

export default ProjectsContainer;
