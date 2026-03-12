import React, { useState } from 'react';
import './styles/globals.css';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Education  from './components/Education';
import Projects   from './components/Projects';
import { Contact, Footer } from './components/Contact';
import Resume     from './components/Resume';
import useFadeIn  from './hooks/useFadeIn';

export default function App() {
  const [page, setPage] = useState('home');
  useFadeIn(page);

  if (page === 'resume') {
    return <Resume onBack={() => setPage('home')} />;
  }

  return (
    <>
      <Navbar onResumeClick={() => setPage('resume')} />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}