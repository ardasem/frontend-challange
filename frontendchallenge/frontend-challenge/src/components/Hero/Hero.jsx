import React from "react";
import { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
import "./hero.css";

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
      <span className="flex justify-end gap-6 items-baseline">
        <button onClick={handleClick}>
          {lang === "tr" ? "ENGLISH" : "TÜRKÇE"}
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
            <button className="hero--button">LinkedIn</button>
            <button className="hero--button">Github</button>
          </span>
        </div>

        <div className="hero--img--container">
          <img src="src\assets\hero-right.png" alt="" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
