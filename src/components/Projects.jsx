import React, { useRef } from 'react';
import { projects } from '../data/portfolioData';
import '../styles/Projects.css';

const GRADIENTS = [
  'linear-gradient(135deg, #1E1008, #6B3A1F)',
  'linear-gradient(135deg, #3B1F0D, #B8875A)',
  'linear-gradient(135deg, #6B3A1F, #D4A46A)',
  'linear-gradient(135deg, #1E1008, #B8875A)',
  'linear-gradient(135deg, #3B1F0D, #6B3A1F)',
];

export default function Projects() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    carouselRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="section-label fade-in">Personal</p>
        <h2 className="section-title fade-in">
          <em>Projects</em>
        </h2>

        <div className="fade-in">
          <div className="carousel" ref={carouselRef}>
            {projects.map((project, idx) => (
              <div className="project-card" key={project.id}>
                {/* Thumbnail: real image or gradient placeholder */}
                {project.image ? (
                  <img
                    className="project-card__thumb"
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div
                    className="project-card__thumb-placeholder"
                    style={{ background: GRADIENTS[idx % GRADIENTS.length] }}
                  >
                    <span>{project.title}</span>
                  </div>
                )}

                <div className="project-card__body">
                  <p className="project-card__tag">{project.tag}</p>
                  <p className="project-card__title">{project.title}</p>
                  <p className="project-card__desc">{project.desc}</p>
                  <a
                    href={project.link}
                    className="project-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scroll(-1)}>←</button>
            <button className="carousel-btn" onClick={() => scroll(1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
