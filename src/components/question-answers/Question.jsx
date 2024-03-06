import React from 'react';
import { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';
import AddAnswer from './AddAnswer.jsx';

function Question({ question, productId }) {
  // const [question_id, setQuestionId] = useState(1);

  // console.log("question inside of question", question);

  return (
    <div>
      <p>Q: {question.question_body} Helpful? <a href=''>Yes </a> {question.question_helpfulness}</p>
      <AddAnswer question={question} productId={productId} />
      <AnswerList questionId={question.question_id} />
    </div>
  );
}

export default Question;