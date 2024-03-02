import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';

function QuestionAnswers({productId}) {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get(`/api/qa/questions/?product_id=${productId}&page=1&count=10`)
    .then((response) => {
      // console.log("response.data", response.data.results)
      setQuestionList(response.data.results);
    })
    .catch((err) => {
      console.log("error", err);
    })
  },[])

  return (
    <div>
      {questionList.map((question, index) => (
        <Question key={index} question={question} />
      ))}
    </div>
  )
}

export default QuestionAnswers;