import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map((el) => {
            const { id, label, percentage } = el;
            return (
              <li className={s.item} key={id}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage} %</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default Statistics;

Statistics.defaultProps = {
  title: "string",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
