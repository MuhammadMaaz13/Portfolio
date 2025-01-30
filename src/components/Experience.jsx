import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="ex-main-container">
      <div className="ex-header"> Experience</div>
      <div className="ex-flex">
        <ExperienceCard
          orgName="Trellis Graphics"
          positionName="Front-end Developer"
          date="Jan 2024-Jul 2024"
        >
          <li>
            At Trellis Graphics, I excelled in diverse projects, from crafting
            React web apps to customizing WordPress sites. Consistently
            delivering top-notch results, I showcased adaptability and
            proficiency in software development.
          </li>
        </ExperienceCard>
        <ExperienceCard
          orgName="University Of Swat"
          positionName="Visiting Lecturer"
          date="Sep 2024-Dec 2024"
        >
          <li>
            Developed engaging course materials for diverse learning styles in
            computer science. Integrated practical projects to enhance
            interactive learning. Supervised and mentored students in their
            academic and project work.
          </li>
        </ExperienceCard>
      </div>
    </div>
  );
};

export default Experience;
