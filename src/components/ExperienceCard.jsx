import PropTypes from 'prop-types';
import './ExperienceCard.css';

function ExperienceCard({ role, company, period, achievements }) {
  return (
    <article className="experience">
      <header className="experience__header">
        <div>
          <h3>{role}</h3>
          <p className="experience__company">{company}</p>
        </div>
        <span className="experience__period">{period}</span>
      </header>
      <ul className="experience__list">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceCard;
