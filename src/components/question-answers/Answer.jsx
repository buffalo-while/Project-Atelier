import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import styles from './styles/Answer.module.css';

function Answer({ answer }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    const hasVotedStorage = localStorage.getItem(`answer${answer.answer_id}voted`);
    if (hasVotedStorage) {
      setHasVoted(true);
    }
  }, [answer.answer_id]);

  useEffect(() => {
    const hasReportedStorage = localStorage.getItem(`answer${answer.answer_id}reported`, 'true');
    if (hasReportedStorage) {
      setReported(true);
    }
  }, [answer.answer_id]);

  const toggleVoted = () => {
    setHasVoted(true);
    localStorage.setItem(`answer${answer.answer_id}voted`, 'true');
  };

  const handleHelpfulVote = () => {
    if (!hasVoted) {
      axios.put(`/api/qa/answers/${answer.answer_id}/helpful`)
        .then(() => {
          setHelpfulCount(helpfulCount + 1);
        })
        .catch((err) => {
          console.log(err);
        });

      toggleVoted();
    }
  };

  const toggleReport = () => {
    setReported(true);
    localStorage.setItem(`answer${answer.answer_id}reported`, 'true');
  };

  const handleReportedAnswer = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/report`)
      .catch((err) => {
        console.log(err);
      });
    toggleReport();
  };

  return (
    <div data-testid="answer-container" className={styles.answerContainer}>
      <div className={styles.answerBody}>
        <span className={styles.answerTitle}>A:</span>
        {' '}
        {answer.body}
      </div>
      <div className={styles.answererInfo}>
        <span className={styles.nameAndDate}> by {answer.answerer_name.toLowerCase() === 'seller' ? <b>Seller</b> : answer.answerer_name},
          {' '}
          {dayjs(answer.date).format('MM-DD-YYYY')} </span>
        {' '}
        {' '}
        |
        <span className={styles.helpful}>Helpful?
          <button onClick={handleHelpfulVote}>Yes</button>
          {' '}
          ({helpfulCount})
        </span>
        |
        <button className={styles.reportedButton} onClick={handleReportedAnswer}>
          {reported ? 'Reported' : 'Report'}
          {' '}
        </button>
      </div>
    </div>
  );
}

export default Answer;
