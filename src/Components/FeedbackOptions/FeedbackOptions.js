import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      <li>
        <button
          type="button"
          className={s.button}
          name="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          className={s.button}
          name="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          className={s.button}
          name="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
