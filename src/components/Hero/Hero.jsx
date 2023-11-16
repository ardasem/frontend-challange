import React from "react";
import { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
import "./hero.css";
import Linkedin from '/assets/LinkedIn.png'
import github from '/assets/github.png'
import heroImg from '/assets/hero-right.png'

function Hero() {
  const { texts, lang, setLang } = useContext(SiteContext);

  const handleClick = () => {
    if (lang === "tr") {
      setLang("en");
    } else {
      setLang("tr");
    }
  };

  return (
    <div className="hero--container">

      <span className="header--container">
        <button className="lang--button" onClick={handleClick}>
          {lang === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>
      </span>

      <div className="hero--info--container">

        <div className="hero--text--container">
          <p className="hero-name-text">arda</p>
          <p className="hero-big-text mt-5">{texts.basicInfo.heroTextBig}</p>
          <p className="hero-medium-text mt-5">
            {texts.basicInfo.heroTextSmall}
          </p>

          <span className="hero--buttons">
            <button className="hero--button">
              <img src={Linkedin} alt="" />
              LinkedIn
              </button>
            <button className="hero--button">
              <img src={github} alt="" />
              Github</button>
          </span>
        </div>

        <div className="hero--img--container">
          <img src={heroImg} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
