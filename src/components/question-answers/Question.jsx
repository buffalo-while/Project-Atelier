import React from 'react';
import { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';


function Question({question}) {
  // const [question_id, setQuestionId] = useState(1);

// console.log("question inside of question", question);

  return (
    <div>
      <p>Q: {question.question_body} Helpful? <a href=''>Yes </a> {question.question_helpfulness} <a href=''>Add Answer</a></p>
      <AnswerList questionId={question.question_id}/>
    </div>
  )
};

export default Question;