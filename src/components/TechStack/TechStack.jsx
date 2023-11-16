import React from "react";
import { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
import "./techstack.css";
import jsLogo from '/assets/js-logo.png';
import reactLogo from '/assets/react-logo.png';
import reduxLogo from '/assets/redux-logo.png';
import nodeLogo from '/assets/node-logo.png';
import vsLogo from '/assets/vscode-logo.png';
import figmaLogo from '/assets/figma-logo.png';

function TechStack() {
  const { lang } = useContext(SiteContext);

  return (
    <div className="stackcard--container">
      <div className="stackcard--layout">
        <span className="techstack--heading">
          <p>{lang === "tr" ? "Beceriler" : "Skills"}</p>
        </span>

        <div className="techstack--container">
          <div className="tech--card">
            <img src={jsLogo} alt="" />
            <p className="tech--heading"> JAVASCRIPT </p>
          </div>
          <div className="tech--card">
            <img src={reactLogo}className="tech--heading" />
              <p className="tech--heading" >REACT </p>
          </div>
          <div className="tech--card">
            <img src={reduxLogo} alt="" />
            <p className="tech--heading"> REDUX </p>
          </div>
          <div className="tech--card">
            <img src={nodeLogo}alt="" />
            <p className="tech--heading"> node.js </p>
          </div>
          <div className="tech--card">
            <img src={vsLogo} alt="" />
            <p className="tech--heading"> VS Code </p>
          </div>
          <div className="tech--card">
            <img src={figmaLogo} alt="" />
            <p className="tech--heading"> FIGMA </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
