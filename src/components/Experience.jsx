import React from 'react';
import { initialExperience } from '../data/portfolioData';
import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__inner">
        <p className="section-label fade-in">Work Experience</p>
        <h2 className="section-title fade-in">
          <em>Timeline</em>
        </h2>

        <div className="timeline">
          {initialExperience.map((item) => (
            <div className="timeline-item fade-in" key={item.id}>
              <p className="timeline-item__date">{item.date}</p>
              <p className="timeline-item__role">{item.role}</p>
              <p className="timeline-item__company">{item.company}</p>
              <p className="timeline-item__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}