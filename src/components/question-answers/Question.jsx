import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';
import styles from './styles/Question.module.css';

function Question({ question, productId, productName }) {
  const [markedAsHelpful, setMarkedAsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(question.question_helpfulness);

  useEffect(() => {
    const helpfulQuestion = localStorage.getItem(`questions${question.question_id}helpful`);
    if (helpfulQuestion) {
      setMarkedAsHelpful(true);
    }
  }, [question.question_id]);

  const toggleHelpful = () => {
    setMarkedAsHelpful(true);
    localStorage.setItem(`questions${question.question_id}helpful`, 'true');
  };

  const handleHelpfulQuestion = () => {
    if (!markedAsHelpful) {
      axios.put(`/api/qa/questions/${question.question_id}/helpful`)
        .then(() => {
          setHelpfulCount(helpfulCount + 1);
        })
        .catch((err) => {
          console.log(err);
        });

      toggleHelpful();
    }
  };

  return (
    <div data-testid="question-container" className={styles.questionContainer}>
      <div className={styles.questionHeader}>
        <span className={styles.questionBody}>
          Q: {question.question_body}
        </span>
        <div className={styles.actionsContainer}>
          <span className={styles.questionHelpful}>
            Helpful?{' '}
            <button onClick={handleHelpfulQuestion}>Yes</button> ({helpfulCount}){ ' | '}
          </span>
          <AddAnswer question={question} productId={productId} productName={productName} />
        </div>
      </div>
      <div className={styles.answerListContainer}>
        <AnswerList questionId={question.question_id} />
      </div>
    </div>
  );
}

export default Question;
