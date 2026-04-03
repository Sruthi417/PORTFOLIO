import React from "react";
import "./Projects.scss";
const Project = () => {
  return (
    <div className="project">
      <div className="projects-left">
        <span className="heading">Featured Projects</span>
        <img src="/images/arrow.png" className="arrow-right" />
        <span className="sub-head">things I’ve built so far</span>
      </div>

      <div className="projects-grid">
        <a
          href="https://sruthii-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src="/images/proj1.png" />
          <p>styled my portfolio </p>
        </a>

        <a
          href="https://quickbay.in"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src="/images/pro2.png" />
          <p>an app for Entrepreneurs</p>
        </a>

        <a
          href="https://resume-builder-theta-snowy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="card"
        >
          <img src="/images/pro3.png" />
          <p>The resume checker</p>
        </a>

        <div className="card">
          <img src="/images/pro4.png" />
          <p>Updates are on the way</p>
        </div>
      </div>
    </div>
  );
};
export default Project;
