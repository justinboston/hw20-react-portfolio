import React from 'react';
import { Link } from "react-router-dom";

function Projects() {
  return (
    <><div className="flex-row">
    </div><div className="portfolio-container">
        <div className="portfolio-grid">
        <a href="https://justinboston.github.io/hw6-weather-dashboard/" target="_blank" className="prework-study-guide">
            <div className="project-label">
              <h3>Weather Dashboard</h3>
            </div>
          </a>
          <a href="https://dine-reserve.onrender.com/" target="_blank" className="prework-study-guide">
            <div className="project-label">
              <h3>Dine Reserve</h3>
            </div>
          </a>
          <a href="https://lets-hang-e9ek.onrender.com/" target="_blank" className="hw1">
            <div className="project-label">
              <h3>Let's Hang</h3>
            </div>
          </a>
          <a href="https://justinboston.github.io/hw2-portfolio/" target="_blank" className="student-portfolio">
            <div className="project-label">
              <h3>Student Portfolio</h3>
            </div>
          </a>
          <a href="https://healixglobal.com/" target="_blank" className="healix">
            <div className="project-label">
              <h3>Healix Global</h3>
            </div>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" className="placeholder1">
            <div className="project-label">
              <h3>Future Projects</h3>
            </div>
          </a>
        </div>
      </div></>
  );
}
export default Projects;