import React from "react";
import TechTag from "../TechTag/TechTag";
import "./projectcard.css";

function ProjectCard({
  projectName,
  projectInfo,
  tags,
  projectUrl,
  projectRepo,
  projectImg,
}) {
  return (
    <div className="project--card--container">
      <div className="project--img--container">
        <img src={projectImg} alt="" />
      </div>
      <div className="project--info--container">
        <p className="project--name">{projectName}</p>
        <p className="project--info">{projectInfo}</p>
        <span className="project--tags">
          {tags.map((tagName) => {
            return <TechTag key={Math.random()} tag={tagName} />;
          })}
        </span>

        <span className="project--links">
          <a href={projectUrl} target="_blank">
            View Site
          </a>
          <a href={projectRepo} target="_blank">
            View Github
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
