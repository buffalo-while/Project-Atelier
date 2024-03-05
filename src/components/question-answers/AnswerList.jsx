import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';


function AnswerList({questionId}) {

  const [answerList, setAnswerList] = useState([]);

  useEffect(() => {
    axios.get(`/api/qa/questions/${questionId}/answers`)
    .then((response => {
      setAnswerList(response.data.results);
      // console.log("response data inside answerList", response.data.results);
    }))
    .catch((err) => {
      console.log("error inside answer useEffect", err);
    })
  },[questionId])

  return (
    <div>
      {answerList.map((answer, index) => (
        <Answer key={index} answer={answer} />
      ))}
    </div>
  )
};

export default AnswerList;