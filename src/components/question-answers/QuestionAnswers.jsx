import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

function QuestionAnswer({productId}) {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get('/api/')
  },[])

  return (
    <div>
      {questionList.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  )

}

export default QuestionAnswer;