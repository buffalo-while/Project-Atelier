import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

function Question({ question, productId }) {
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
    <div>
      <p>Q: {question.question_body} Helpful?{' '} <button onClick={handleHelpfulQuestion}>Yes</button>{''}  {helpfulCount}</p>
      <AddAnswer question={question} productId={productId} />
      <AnswerList questionId={question.question_id} />
    </div>
  );
}

export default Question;
