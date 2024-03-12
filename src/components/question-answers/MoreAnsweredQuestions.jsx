import React from 'react';
import styles from './styles/MoreAnsweredQuestions.module.css';

function MoreAnsweredQuestions({ handleLoadingMore }) {
  return (
    <div>
      <button type="submit" data-testid="more-answered-questions-button" className={styles.moreAnsweredQuestionsButton} onClick={handleLoadingMore}>MORE ANSWERED QUESTIONS</button>
    </div>
  );
}

export default MoreAnsweredQuestions;
