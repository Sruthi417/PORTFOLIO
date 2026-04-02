import React from "react";
import { Link } from "react-router";
import './Nav.scss'

const Navbar = ()=>{
    return(
  <div className="nav">
   <nav className="navbar">
  <div className="nav-left">
    <img src="/images/vector.png" alt="logo" />
    <h3>Sruthii</h3>
  </div>

  <div className="nav-right">
    <a href="#abouts">About</a>
    <a href="#projects">Projects</a>
    <a href="#contacts">Contact</a>
    <button onClick={() =>
    window.location.href =
      "mailto:sruthisukumaran07@gmail.com?subject=hiring Inquiry&body=Hi Sruthi, I would like to connect."
       } className="hire-btn">Hire Me</button>
  </div>
</nav>
</div>
        
    )
}

export default Navbar