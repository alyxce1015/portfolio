import React from 'react';
import '../styles/Resume.css';

// ─────────────────────────────────────────
// TO ADD YOUR RESUME:
//   1. Place your PDF in the /public/ folder
//      e.g. /public/resume.pdf
//   2. Replace null below with the filename:
//      const RESUME_PDF = '/resume.pdf';
// ─────────────────────────────────────────
const RESUME_PDF = '/Alyxander Cui Edio.pdf';

export default function Resume({ onBack }) {
  return (
    <div className="resume-page">
      <div className="resume-page__header">
        <div className="resume-page__header-inner">
          <button onClick={onBack} className="resume-page__back">
            ← Back to Portfolio
          </button>
          <div className="resume-page__title-wrap">
            <p className="section-label"></p>
            <h1 className="resume-page__title">
              <em>My Resume</em>
            </h1>
          </div>
          {RESUME_PDF && (
            <a
              href={RESUME_PDF}
              download
              className="btn btn-primary resume-page__download"
            >
              Download PDF
            </a>
          )}
        </div>
      </div>

      <div className="resume-page__viewer">
        {RESUME_PDF ? (
          <iframe
            className="resume-page__iframe"
            src={RESUME_PDF}
            title="Alyxander Cui Edio — Resume"
          />
        ) : (
          <div className="resume-page__placeholder">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none"
              stroke="#B8875A" strokeWidth="1">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <p>No resume uploaded yet</p>
            <span>Set RESUME_PDF in Resume.jsx</span>
          </div>
        )}
      </div>
    </div>
  );
}