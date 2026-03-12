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
    date:    '2023 — Present',
    role:    'Software Engineer',
    company: 'Company Name · Full-time',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
  {
    id: 2,
    date:    '2021 — 2023',
    role:    'Junior Developer',
    company: 'Previous Company · Full-time',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
  {
    id: 3,
    date:    '2020 — 2021',
    role:    'Software Intern',
    company: 'Internship Company · Internship',
    desc:    'Brief description of your role and what you accomplished. Keep it to 1–2 impactful sentences.',
  },
];

// ── PROJECTS ─────────────────────────────
// To show a real screenshot, set `image: '/images/your-screenshot.png'`
// and place the file in the /public/images/ folder.
export const projects = [
  {
    id:    1,
    title: 'Project One',
    tag:   'Web App · React',
    desc:  'Short description of what you built and the tech you used.',
    link:  '#',
    image: null,
  },
  {
    id:    2,
    title: 'Project Two',
    tag:   'API · Node.js',
    desc:  'Short description of what you built and the tech you used.',
    link:  '#',
    image: null,
  },
  {
    id:    3,
    title: 'Project Three',
    tag:   'Mobile · Swift',
    desc:  'Short description of what you built and the tech you used.',
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