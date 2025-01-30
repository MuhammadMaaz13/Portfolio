import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import reactSvg from "../assets/react1.svg";
import htmlSvg from "../assets/html5.svg";
import canvaSvg from "../assets/canva.svg";
import jsSvg from "../assets/javascript.svg";
import cssSvg from "../assets/css.svg";
import wordPressSvg from "../assets/wordpress.svg";
import tailwindSvg from "../assets/tailwind.svg";
const Skills = () => {
  return (
    <div className="skills-main">
      <div className="skills-header">My Skill Set</div>
      <div className="svg-grid">
        <SkillCard svgPath={htmlSvg} svgName="HTML5" svgAltName="React" />
        <SkillCard svgPath={cssSvg} svgName="CSS" svgAltName="React" />
        <SkillCard svgPath={jsSvg} svgName="JS" svgAltName="React" />
        <SkillCard svgPath={reactSvg} svgName="React" svgAltName="React" />
        <SkillCard
          svgPath={wordPressSvg}
          svgName="Wordpress"
          svgAltName="React"
        />
        <SkillCard
          svgPath={tailwindSvg}
          svgName="Tailwind"
          svgAltName="React"
        />
        <SkillCard svgPath={canvaSvg} svgName="Canva" svgAltName="React" />
      </div>
    </div>
  );
};

export default Skills;
