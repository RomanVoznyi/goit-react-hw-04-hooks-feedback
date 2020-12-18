import { useState, useEffect } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';
import s from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState('');

  const handleClick = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositive(`${((good / total) * 100).toFixed(2)}%`);
  }, [good, total]);

  return (
    <>
      <h1 className={s.header}>Task 1. Feedback form</h1>
      <div className={s.feedbackForm}>
        <Section title="Please leave feedback:">
          <FeedbackOptions onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics:">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    </>
  );
};

export default App;
