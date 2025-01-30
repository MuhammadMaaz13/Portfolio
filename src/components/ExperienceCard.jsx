import React from "react";
import "./Experience.css";
const ExperienceCard = ({ children, positionName, orgName, date }) => {
  return (
    <div className="ex-container">
      <div className="ex-position-org">
        <div className="ex-position">{positionName}</div>
        <div className="ex-org">{orgName}</div>
      </div>
      <div className="ex-des">
        <ul>{children}</ul>
      </div>
      <div className="ex-date">
        <div id="date">{date}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
