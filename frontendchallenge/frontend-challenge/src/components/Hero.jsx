import React from "react";
import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";

function Hero() {
const {texts} = useContext(SiteContext)
console.log(texts)

  return (
    <div className="hero--container">
      <div className="info--container"></div>
      <div className="img--container">
        <p className="">Hi! 👋</p>
        <p className="">
          {texts.basicInfo.aboutMe}
        </p>
        <div className="links--container"></div>
        <p className="">
          Currently Freelancing for UX, UI, & Web Design Project . Invite me to
          join your team - pratamaiosi@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Hero;
