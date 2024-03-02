import React from 'react';
import { useState, useEffect } from 'react';
import AnswerList from './AnswerList.jsx';


function Question({question}) {
  // const [question_id, setQuestionId] = useState(1);

// console.log("question inside of question", question);
  return (
    <div>
      <p>Q: {question.question_body}</p>
      <AnswerList questionId={question.question_id}/>
    </div>
  )
}

export default Question;