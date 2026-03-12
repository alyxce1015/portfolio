/* ─────────────────────────────────────────
   portfolioData.js
   ✏️  Edit this file to update your portfolio content.
───────────────────────────────────────── */

// ── SKILLS ───────────────────────────────
// To add/remove a skill, edit these arrays.
// Icons are pulled from https://skillicons.dev — free, no setup needed.
// Full icon list: https://skillicons.dev/icons?i=all
export const skills = {
  languages: [
    { name: 'Python',     icon: 'https://skillicons.dev/icons?i=python' },
    { name: 'C++',        icon: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'SQL',        icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
    { name: 'HTML',       icon: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSS',        icon: 'https://skillicons.dev/icons?i=css' },
    { name: 'C#',         icon: 'https://skillicons.dev/icons?i=cs' },
  ],
  technologies: [
    { name: 'React.js',            icon: 'https://skillicons.dev/icons?i=react' },
    { name: 'Supabase',            icon: 'https://skillicons.dev/icons?i=supabase' },
    { name: 'Vite.js',             icon: 'https://skillicons.dev/icons?i=vite' },
    { name: 'Unity',               icon: 'https://skillicons.dev/icons?i=unity' },
    { name: 'Git',                 icon: 'https://skillicons.dev/icons?i=git' },
    { name: 'AWS',                 icon: 'https://skillicons.dev/icons?i=aws' },
    { name: 'Linux',               icon: 'https://skillicons.dev/icons?i=linux' },
    { name: 'Power BI',            icon: 'https://skillicons.dev/icons?i=powerbi' },
    { name: 'Postman',             icon: 'https://skillicons.dev/icons?i=postman' },
    { name: 'REST APIs',           icon: 'https://skillicons.dev/icons?i=fastapi' },
    { name: 'JIRA',                icon: 'https://skillicons.dev/icons?i=jira' },
    { name: 'Oracle SQL Dev',      icon: 'https://skillicons.dev/icons?i=mysql' },
    { name: 'Power Automate',      icon: 'https://skillicons.dev/icons?i=azure' },
    { name: 'Quantum Control',     icon: 'https://skillicons.dev/icons?i=docker' },
  ],
};

// ── WORK EXPERIENCE ──────────────────────
export const initialExperience = [
  {
    id: 1,
    date:    'June 2025 — Present',
    role:    'Junior Developer and Data Analyst',
    company: 'OMI Specialty Products · Fullerton, CA',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
  {
    id: 2,
    date:    'June 2025 — August 2025',
    role:    'Software Engineer Intern',
    company: 'Divine Software Systems LLC · Fremont, CA',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
  {
    id: 3,
    date:    'January 2023 — June 2023',
    role:    'Configuration Analyst Intern',
    company: 'Altierus Career College · Remote',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
];

// ── PROJECTS ─────────────────────────────
// To show a real screenshot, set `image: '/images/your-screenshot.png'`
// and place the file in the /public/images/ folder.
export const projects = [
  {
    id:    1,
    title: 'Nu Deck',
    tag:   'Game Design · Unity, C#',
    desc:  'Developed a Pokemon-style game in Unity using C#. Implemented core gameplay mechanics, including turn-based battles, map design, and styling.',
    link:  'https://github.com/Kentalope22/Nu-Deck',
    image: null,
  },
  {
    id:    2,
    title: 'Portfolio',
    tag:   'Web App · HTML, CSS, JavaScript, React.js',
    desc:  'Built a personal portfolio to showcase experience, skills, projects, and information about me.',
    link:  '#',
    image: null,
  },
  {
    id:    3,
    title: 'Mock UN Database Admin',
    tag:   'Database Management · SQL',
    desc:  'Structured a custom database using mock data.',
    link:  '#',
    image: null,
  },
  {
    id:    4,
    title: 'Project Four',
    tag:   'Full-Stack · Python',
    desc:  'Short description of what you built and the tech you used.',
    link:  '#',
    image: null,
  },
];