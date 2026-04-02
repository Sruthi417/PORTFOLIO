import React from "react";
import "./Projects.scss"
const Project = ()=>{
    return(
        <div className="project">
        <div className="projects-left">
        <span className="heading">Featured Projects</span>
        <img src="/images/arrow.png" className="arrow-right" />
        <span className="sub-head">Have designed morethan 3 projects</span>
      </div>

       
      <div className="projects-grid">
        <div className="card">
          <img src="/images/pro1.png" />
          <p>4 style portfolio design</p>
        </div>

        <div className="card">
          <img src="/images/pro2.png" />
          <p>Color system for app</p>
        </div>

        <div className="card">
          <img src="/images/pro3.png" />
          <p>Onboarding screen process</p>
        </div>

        <div className="card">
          <img src="/images/pro4.png" />
          <p>Finance landing page</p>
        </div>
      </div>
      </div>
            
    )

}
export default Project