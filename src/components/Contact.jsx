import React from 'react';
import '../styles/Contact.css';

export function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">Contact</p>
      <h2 className="section-title">
        Get in <em> touch </em>
      </h2>
      <p className="contact__sub">
        Send me an email and schedule a call, or a chat!
      </p>
      <a href="mailto:alyxce1015@gmail.com" className="contact__email">
        alyxce1015@gmail.com
      </a>
      <ul className="contact__socials">
        <li><a href="https://github.com/alyxce1015" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/alyx-cui-edio/" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      © 2026 All rights reserved &nbsp;·&nbsp; Built Alyxander Cui Edio
    </footer>
  );
}
