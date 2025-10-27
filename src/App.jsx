import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiLayers,
  FiBriefcase,
  FiAward,
} from 'react-icons/fi';
import SectionCard from './components/SectionCard.jsx';
import ExperienceCard from './components/ExperienceCard.jsx';
import {
  profile,
  professionalSummary,
  coreSkills,
  experienceHighlights,
  professionalExperience,
  education,
  personalDetails,
} from './data/resumeData.js';
import './App.css';

function App() {
  const primaryHighlight = experienceHighlights[0];

  return (
    <div className="app">
      <header className="hero">
        <div className="hero__info">
          <div>
            <p className="hero__eyebrow">Resume</p>
            <h1>{profile.name}</h1>
            <p className="hero__role">{profile.title}</p>
            <p className="hero__location">
              <FiMapPin aria-hidden="true" />
              <span>{profile.location}</span>
            </p>
          </div>
          <div className="hero__contact">
            <a className="hero__contact-link" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
              <FiPhone aria-hidden="true" />
              <span>{profile.phone}</span>
            </a>
            <a className="hero__contact-link" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
          </div>
        </div>
        <div className="hero__media">
          <div className="hero__photo">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          </div>
          <div className="hero__meta">
            {profile.headline && <p className="hero__headline">{profile.headline}</p>}
            {primaryHighlight && (
              <p className="hero__tenure">
                <span>{primaryHighlight.value}</span>
                <span>{primaryHighlight.label}</span>
              </p>
            )}
          </div>
        </div>
      </header>

      <main className="content">
        <SectionCard title="Professional Summary" icon={FiUser}>
          <p>{professionalSummary}</p>
        </SectionCard>

        <SectionCard title="Core Skills" subtitle="Tech stack and tools" icon={FiLayers}>
          <div className="skills-grid">
            {coreSkills.map((skill) => (
              <div key={skill.title} className="skills-grid__group">
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Experience Summary" icon={FiAward}>
          <ul className="experience-summary">
            {experienceHighlights.map((highlight) => (
              <li key={highlight.label}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Professional Experience" subtitle="Key roles & achievements" icon={FiBriefcase}>
          <div className="experience-grid">
            {professionalExperience.map((role) => (
              <ExperienceCard
                key={`${role.role}-${role.company}`}
                role={role.role}
                company={role.company}
                period={role.period}
                achievements={role.achievements}
              />
            ))}
          </div>
        </SectionCard>

        <div className="content__split">
          <SectionCard title="Education" icon={FiAward}>
            <div className="education">
              {education.map((item) => (
                <div key={item.degree} className="education__item">
                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                  <p className="education__details">{item.details}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Personal Details" icon={FiUser}>
            <ul className="personal-details">
              {personalDetails.map((detail) => (
                <li key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </main>

      <footer className="footer">
        <p>{profile.availability}</p>
      </footer>
    </div>
  );
}

export default App;
