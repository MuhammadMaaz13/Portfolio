import React from "react";

const EducationCard = ({ eduLogo, date, eduName, eduLevel }) => {
  return (
    <div className="edu-main">
      <div className="edu-level">{eduLevel}</div>
      <div className="edu-detail">
        <div className="edu-svg">
          <img width={40} height={40} src={eduLogo} alt="eduPic" />
          <div className="edu-in">{eduName}</div>
        </div>
        <div className="edu-date">{date}</div>
      </div>
    </div>
  );
};

export default EducationCard;
