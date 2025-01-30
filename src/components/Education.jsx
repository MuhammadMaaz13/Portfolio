import React from "react";
import "./Education.css";
import EducationCard from "./EducationCard";
import uswat from "../assets/uswat.png";
import sps from "../assets/sps.png";
const Education = () => {
  return (
    <div className="main-edu-container">
      <div className="edu-header">My Education</div>
      <div className="edu-grid">
        <EducationCard
          eduLevel="BS Computer Science"
          eduLogo={uswat}
          eduName="University Of Swat"
          date="Dec 2023"
        />
        <EducationCard
          eduLevel="Intermediate"
          eduLogo={sps}
          eduName="SPS College Swat"
          date="July 2019"
        />
        <EducationCard
          eduLevel="Metric"
          eduLogo={sps}
          eduName="SPS College Swat"
          date="June 2016"
        />
      </div>
    </div>
  );
};

export default Education;
