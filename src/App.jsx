import React from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <div className="APP_DIV">
        <div className="header">
          <Navbar />
        </div>
        <div className="main">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="certification">
            <Certifications />
          </section>
          <footer id="footer" className="footer">
            <div className="footer-content">
              <p>&copy; 2025 Muhammad Maaz. All Rights Reserved.</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/muhammadmaaz113"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a
                  href="https://wa.me/+923409096695"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
                <a
                  href="mailto:muh.maaz92@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i> E-mail
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
