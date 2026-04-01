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
    <a href="">About</a>
    <a href="">Projects</a>
    <a href="">Contact</a>
    <button className="hire-btn">Hire Me</button>
  </div>
</nav>
</div>
        
    )
}

export default Navbar