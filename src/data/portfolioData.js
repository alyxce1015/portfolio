/* ─────────────────────────────────────────
   portfolioData.js
   ✏️  Edit this file to update your portfolio content.
───────────────────────────────────────── */

// ── EDUCATION ────────────────────────────
export const education = {
  school:     'California State University, Fullerton',
  short:      'CSUF',
  degree:     'Bachelor of Science in Computer Science',
  graduation: 'Expected Graduation: May 2027',      
  highlights: [
    // Relevant coursework — shows employers you have the theory background
    {
      label: 'Relevant Coursework',
      items: [
        'Data Structures',
        'Algorithm Engineering',
        'Software Engineering',
        'File Structures and Databases',
        'Compilers',
        'Edge AI',
        'AI Principles',
        'Operating Systems',
        'Modern Software Development',
        'Object-Oriented Programming',
      ],
    },
    // Clubs / orgs — shows involvement beyond just classes
    {
      label: 'Involvement',
      items: [
        'Association for Computing Machinery (ACM)',  // ✏️ swap for clubs you're in
        'Theta Tau ΘT - Engineering Fraternity',
      ],
    },
  ],
};

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
    { name: 'Oracle SQL Dev',      icon: 'https://skillicons.dev/icons?i=oracle' },
    { name: 'Power Automate',      icon: 'https://skillicons.dev/icons?i=azure' },
    { name: 'Quantum Control',     icon: 'https://skillicons.dev/icons?i=docker' },
  ],
};

// ── WORK EXPERIENCE ──────────────────────
export const initialExperience = [
  {
    id: 1,
    date:    'June 2025 — Present',
    role:    'Junior Developer & Data Analyst',
    company: 'OMI Specialty Products · Fullerton, CA',
    desc:    'Designed automation and data infrastructure using Python, SQL, and APIs to process large operational datasets and integrate internal systems across departments. Built a Flask-based warehouse management web application and high-volume data migration pipelines that improved efficiency, ensured data integrity, and reduced company software costs.',
  },
  {
    id: 2,
    date:    'June 2025 — August 2025',
    role:    'Software Engineer Intern',
    company: 'Divine Software Systems LLC · Fremont, CA',
    desc:    'Developed scalable backend and interactive frontend features using JavaScript and Python within an Agile development environment. Built modular API-based services, practiced test-driven development, and contributed peer-reviewed code to production systems used by internal teams.',
  },
  {
    id: 3,
    date:    'January 2023 — June 2023',
    role:    'Configuration Analyst Intern',
    company: 'Altierus Career College · Remote',
    desc:    'Translated business requirements into technical system configurations supporting large multi-institution deployments. Produced technical documentation and implementation specifications that improved onboarding efficiency and reduced user support issues.',
  },
];

// ── PROJECTS ─────────────────────────────
// To show a real screenshot, set `image: '/images/your-screenshot.png'`
// and place the file in the /public/images/ folder.
export const projects = [
  {
    id:    1,
    title: 'Nu Deck',
    tag:   'Video Game · Unity, C#',
    desc:  'Developed a 2D Pokemon style game in Unity that features core mechanics from the original game.',
    link:  'https://github.com/Kentalope22/Nu-Deck',
    image: null,
  },
  {
    id:    2,
    title: 'Personal Portfolio Website',
    tag:   'Website · HTML, CSS, JavaScript, React.js',
    desc:  'Developed a personal portfolio website using React.js to showcase my projects, skills, and experience.',
    link:  'https://github.com/alyxce1015/portfolio',
    image: null,
  },
  {
    id:    3,
    title: 'Mock UN Database Admin',
    tag:   'Database Structure · MySql',
    desc:  'Built a database structure to imitate the United Nations database, which includes tables for countries, representatives, and resolutions.',
    link:  'https://github.com/alyxce1015/UN-database-admin-Project',
    image: null,
  },
  {
    id:    4,
    title: 'Nebuluv',
    tag:   'Web App · HTML, CSS, JavaScript',
    desc:  'FullyHacks 2025 Hackathon Project - Personality quiz that finds you your alien match based on your preferences.',
    link:  'https://github.com/k8iekitkat/nebuluv',
    image: null,
  },
];