import React, { useContext } from "react";
import { SiteContext } from "../../context/SiteContext";
import "./profile.css";

function Profile() {
  const { texts } = useContext(SiteContext);
  return (
    <div className="profile--container">
      <div className="profile--info--container">
        <div className="basic--information">
          <p className="info--text--heading">{texts.headings.basicInfo}</p>
          <span className="info--span">
            <p className="info--label">{texts.headings.birthDate}</p>
            <p className="info--text">{texts.basicInfo.birthDate}</p>
          </span>
          <span className="info--span">
            <p className="info--label">{texts.headings.cityOfResidence}</p>
            <p className="info--text">{texts.basicInfo.cityOfResidence}</p>
          </span>
          <span className="info--span">
            <p className="info--label">{texts.headings.academicStatus}</p>
            <p className="info--text">{texts.basicInfo.academicStatus}</p>
          </span>
          <span className="info--span">
            <p className="info--label">{texts.headings.role}</p>
            <p className="info--text">{texts.basicInfo.role}</p>
          </span>
        </div>

        <div className="profile--img--container">
          <img src="src\assets\image2.png" alt="" />
        </div>

        <div className="about--me">
          <p className="info--text--heading">{texts.headings.aboutMe}</p>
          <p className="info--text">{texts.basicInfo.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
