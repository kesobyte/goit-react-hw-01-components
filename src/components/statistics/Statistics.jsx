import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statisctics}>
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

//Type Checking using propTypes
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
