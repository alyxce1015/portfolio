import React from 'react';
import { skills } from '../data/portfolioData';
import '../styles/Skills.css';

function SkillGrid({ items }) {
  return (
    <div className="skill-grid">
      {items.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <img
            className="skill-card__icon"
            src={skill.icon}
            alt={skill.name}
            loading="lazy"
          />
          <span className="skill-card__name">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="section-label fade-in"></p>
        <h2 className="section-title fade-in">
          Skills &amp; <em>Technologies</em>
        </h2>

        <div className="skills__group fade-in">
          <h3 className="skills__group-label">Languages &amp; Scripting</h3>
          <SkillGrid items={skills.languages} />
        </div>

        <div className="skills__group fade-in">
          <h3 className="skills__group-label">Technologies &amp; Tools</h3>
          <SkillGrid items={skills.technologies} />
        </div>
      </div>
    </section>
  );
}