import profilePhoto from '../assets/gopi.png';

export const profile = {
  name: 'G. Gopinath',
  title: 'Backend & API Engineer',
  location: 'Salem, Tamil Nadu, India',
  email: 'k2gsalem@gmail.com',
  linkedin: 'https://www.linkedin.com/in/k2gsalem/',
  availability: 'Open to full-time, part-time, or contract roles',
  headline: 'Building reliable APIs and modernizing backend systems.',
  photo: profilePhoto,
};

export const professionalSummary =
  'Experienced backend engineer focused on PHP/Laravel, Node.js, and building robust REST APIs. Ready to contribute immediately to backend, API, and cloud-focused projects.';

export const coreSkills = [
  { title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'REST APIs'] },
  { title: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD'] },
  { title: 'Tools', items: ['MySQL', 'Git', 'Postman'] },
];

export const experienceHighlights = [
  { label: 'Backend (PHP/Laravel)', value: '8+ yrs' },
  { label: 'APIs & Integrations', value: '6+ yrs' },
  { label: 'Cloud & Containers', value: '2+ yrs' },
];

export const professionalExperience = [
  {
    role: 'Software Developer',
    company: 'CPOS Inc. (Remote)',
    period: 'Oct 2022 – Present',
    achievements: [
      'Built and maintained backend services and REST APIs for ordering and POS systems.',
      'Deployed containerized apps on AWS and improved deployment reliability.',
      'Integrated third-party services (email/SMS/payment) and improved platform stability.',
    ],
  },
  {
    role: 'Laravel API Developer',
    company: 'BA Technology',
    period: 'Apr 2022 – Sep 2022',
    achievements: [
      'Delivered secure Laravel APIs and payment integrations for clients.',
      'Collaborated with frontend teams to integrate services efficiently.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Hridham Technology',
    period: 'Aug 2018 – Apr 2022',
    achievements: [
      'Developed full-stack web apps and optimized database queries for performance.',
    ],
  },
];

// Optional: keep empty arrays to hide sections in the UI
export const education = [];
export const personalDetails = [];
