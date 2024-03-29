import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import styles from './styles/AnswerList.module.css';

function AnswerList({ questionId }) {
  const [answerList, setAnswerList] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState(2);
  const [remainingAnswers, setRemainingAnswers] = useState(0);

  const loadMoreAnswers = () => {
    setVisibleAnswers(visibleAnswers + 2);
  };

  useEffect(() => {
    axios.get(`/api/qa/questions/${questionId}/answers`)
      .then(((response) => {
        setAnswerList(response.data.results.sort((a, b) => b.helpfulness - a.helpfulness));
      }))
      .catch((err) => {
        console.log('error inside answer useEffect', err);
      });
  }, [questionId]);

  useEffect(() => {
    setRemainingAnswers(answerList.length - visibleAnswers);
  }, [visibleAnswers, answerList]);

  return (
    <div data-testid="answerlist-container">
      {answerList.slice(0, visibleAnswers).map((answer) => (
        <Answer key={answer.answer_id} answer={answer} />
      ))}
      {remainingAnswers > 0 ? <button className={styles.answerListButton} onClick={loadMoreAnswers}>LOAD MORE ANSWERS</button> : null}
    </div>
  );
}

export default AnswerList;
