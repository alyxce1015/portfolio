import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ onResumeClick }) {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">Alyxander Cui Edio</a>
      <ul className="navbar__links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="navbar__resume-btn" onClick={onResumeClick}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}