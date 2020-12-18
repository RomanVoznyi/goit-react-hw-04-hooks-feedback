import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <table className={s.resultsList}>
      <tbody>
        <tr>
          <td>Good:</td>
          <td className={s.value}>{good}</td>
        </tr>
        <tr>
          <td>Neutral:</td>
          <td className={s.value}>{neutral}</td>
        </tr>
        <tr>
          <td>Bad:</td>
          <td className={s.value}>{bad}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td className={s.value}>{total}</td>
        </tr>
        <tr>
          <td>PositiveFeedback:</td>
          <td className={s.value}>{positive}</td>
        </tr>
      </tbody>
    </table>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.string,
};

export default Statistics;
