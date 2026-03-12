import React from 'react';
import '../styles/Hero.css';

// ─────────────────────────────────────────
// TO ADD YOUR PHOTO:
//   1. Place your image in the /public/images/ folder
//      e.g. /public/images/alyxander.jpg
//   2. Replace `null` below with the path string:
//      const PHOTO = '/images/alyxander.jpg';
// ─────────────────────────────────────────
const PHOTO = null;

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* ── PHOTO ── */}
      <div className="hero__photo-wrap fade-in">
        <div className="photo-frame">
          {PHOTO ? (
            <img
              className="photo-frame__img"
              src={PHOTO}
              alt="Alyxander Cui Edio"
            />
          ) : (
            /* Placeholder shown until you set PHOTO above */
            <div className="photo-frame__placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="#B8875A" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <p>Your Photo</p>
              <span>Set PHOTO in Hero.jsx</span>
            </div>
          )}
        </div>
      </div>

      {/* ── TEXT ── */}
      <div className="hero__text fade-in" style={{ animationDelay: '0.15s' }}>
        <p className="hero__eyebrow">Software Engineer</p>

        <h1 className="hero__name">
          <span className="first">Alyxander</span>
          <span className="last">Cui Edio</span>
        </h1>

        <p className="hero__role">
          Hi, I'm Alyx and I am addicted to coffee :D</p>

        <div className="hero__btns">
          <a href="#projects" className="btn btn-primary">Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me!</a>
        </div>
      </div>

    </section>
  );
}