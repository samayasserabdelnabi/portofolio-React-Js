import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg navbar-expand-lg py-4">
    
  <div className="container" id="navbarSupportedContent">
  <Link className="navbar-brand fw-bold text-white me-3">START FRAMEWORK</Link>
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <Link className="nav-link fw-bold text-white me-3" aria-current="page" to={"/"}>HOME</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fw-bold text-white me-3" to={"/about"} >ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fw-bold text-white me-3" to={"/portfolio"} >PORTFOLIO</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link fw-bold text-white me-3" to={"/contact"} >CONTACT US</Link>
      </li>
    </ul>
  </div>
</nav>
  </>
}
