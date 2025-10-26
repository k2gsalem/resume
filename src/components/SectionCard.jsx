import PropTypes from 'prop-types';
import './SectionCard.css';

function SectionCard({ title, subtitle, children, icon: Icon }) {
  return (
    <section className="card">
      <header className="card__header">
        {Icon ? <Icon aria-hidden="true" /> : null}
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="card__subtitle">{subtitle}</p> : null}
        </div>
      </header>
      <div className="card__body">{children}</div>
    </section>
  );
}

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
};

SectionCard.defaultProps = {
  subtitle: undefined,
  icon: undefined,
};

export default SectionCard;
