import React from "react";
import './about.scss'

const About=()=>{
    return(
        <div className="about-main">
            <div className="about-subup">
                <img src="/images/me.png" className="avatar" />
                <img src="/images/arrow.png" className="arrow"/>
                <span className="name">Sruthi</span>
            </div>
            <div className="about-submiddle">
                <span className="sen1">I <span className="highlight">design</span> top notch websites</span>
                <div className="sen-merge">
                <span className="sen2">I'll design your website and will develop to land it on internet using No-Code</span>
                <button className="hire-Btn">Hire Me</button>
                </div>
            </div>
            <div className="about-subbottom">
                <span className="tag">What i do?</span>
                <img src="/images/arrow.png" className="arrow-down"/>
                <div className="boxes">
                    <div className="card-yellow">
                      <span className="yellow">Pen/Paper</span>
                      <img src="/icons/pencil.png" className="pencil"/>
                        <span className="yellow-sen">User Research Design</span>
                      </div>

                    <div className="card-blue">
                      <span className="blue">Figma</span>
                      <img src="/icons/eye.png" className="eye"/>
                        <span className="blue-sen">UI & Product Design</span>
                      </div>

                    <div className="card-pink">
                      <span className="pink">Webflow</span>
                      <img src="/icons/star.png" className="star"/>
                        <span className="pink-sen">No-code Development</span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default About