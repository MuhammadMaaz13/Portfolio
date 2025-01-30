import React from "react";
import "./about.css";
import myPic2 from "../assets/nobg.png";
const About = () => {
  return (
    <>
      <div className="main-container">
        <div className="all">
          <div className="detail">
            <div className="fullName">
              <div className="lastname">Front-end Developer</div>
              <div className="firstname">Muhammad</div>
              <div className="lastname">Maaz</div>
            </div>
            <div className="description">
              As a dedicated frontend developer, I specialize in creating
              dynamic web applications using{" "}
              <span className="des-part">
                {" "}
                React, HTML, CSS, and customizing WordPress sites
              </span>
              .
            </div>
          </div>
          <div className="image">
            <img src={myPic2} alt="image-here" />
          </div>
        </div>
        <div className="btn-container">
          <a href="#footer">Contact Me</a>
        </div>
      </div>
    </>
  );
};

export default About;
