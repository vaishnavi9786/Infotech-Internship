import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        LearnFree
      </a>
      <ul className="navLinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a className="navButton" href="#courses">
        Start Learning
      </a>
    </nav>
  );
};

export default Navbar;
