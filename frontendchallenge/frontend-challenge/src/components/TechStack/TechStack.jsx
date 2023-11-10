import React from "react";
import { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
import "./techstack.css";

function TechStack() {
  const { lang } = useContext(SiteContext);

  return (
    <div className="stackcard--container">
      <span className="techstack--heading">
        <p>{lang === "tr" ? "Beceriler" : "Skills"}</p>
      </span>

      <div className="techstack--container">
        <div className="tech--card">
          <img src="src\assets\js-logo.png" alt="" />
          <p className="tech--heading"> JAVASCRIPT </p>
        </div>
        <div className="tech--card">
          <img src="src\assets\react-logo.png" alt="" />
          <p className="tech--heading">REACT </p>
        </div>
        <div className="tech--card">
          <img src="src\assets\redux-logo.png" alt="" />
          <p className="tech--heading"> REDUX </p>
        </div>
        <div className="tech--card">
          <img src="src\assets\node-logo.png" alt="" />
          <p className="tech--heading"> node.js </p>
        </div>
        <div className="tech--card">
          <img src="src\assets\vscode-logo.png" alt="" />
          <p className="tech--heading"> VS Code </p>
        </div>
        <div className="tech--card">
          <img src="src\assets\figma-logo.png" alt="" />
          <p className="tech--heading"> FIGMA </p>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
