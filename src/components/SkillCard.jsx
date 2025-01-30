import React from "react";
import "./Skills.css";
const SkillCard = ({ svgAltName, svgName, svgPath }) => {
  return (
    <div className="svg-detail">
      <div className="svg-container">
        <img width={"50px"} height={"50px"} src={svgPath} alt={svgAltName} />
      </div>
      <div className="name-container">{svgName}</div>
    </div>
  );
};

export default SkillCard;
