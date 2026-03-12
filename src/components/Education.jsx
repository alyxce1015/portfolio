import React from 'react';
import { education } from '../data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education__inner">

        <div className="education__left fade-in">
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Where I <em>learned.</em>
          </h2>

          <div className="education__card">
            {/* Logo / Initials badge */}
            <div className="education__badge">
              <span>{education.short}</span>
            </div>

            <div className="education__meta">
              <p className="education__school">{education.school}</p>
              <p className="education__degree">{education.degree}</p>
              <div className="education__tags">
                <span className="education__tag">{education.graduation}</span>
                {education.gpa && (
                  <span className="education__tag">GPA {education.gpa}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="education__right fade-in">
          {education.highlights.map((group) => (
            <div className="education__group" key={group.label}>
              <p className="education__group-label">{group.label}</p>
              <ul className="education__list">
                {group.items.map((item) => (
                  <li className="education__list-item" key={item}>
                    <span className="education__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}