import React from 'react';

function Projects() {
  return (
    <><div className="flex-row">
      <h3 className="section-title">Work</h3>
    </div><div className="portfolio-container">
        <div className="portfolio-grid">
          <a href="https://justinboston.github.io/prework-study-guide/" target="_blank" className="prework-study-guide">
            <div className="project-label">
              <h3>Prework Study Guide</h3>
            </div>
          </a>
          <a href="https://justinboston.github.io/hw1/" target="_blank" className="hw1">
            <div className="project-label">
              <h3>Horiseon Landing Page</h3>
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