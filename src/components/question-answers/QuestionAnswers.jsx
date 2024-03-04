import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import SearchQuestion from './SearchQuestion.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';

function QuestionAnswers({productId}) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestionList, setFilteredQuestionList] = useState([]);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    axios.get(`/api/qa/questions/?product_id=${productId}&page=1&count=10`)
    .then((response) => {
      // console.log("response.data", response.data.results)
      setQuestionList(response.data.results);
    })
    .catch((err) => {
      console.log("error", err);
    })
  },[productId]);

  const handleSearchQuestion = (searchValue) => {
    event.preventDefault();
    // console.log("searchValue", searchValue);

    if (searchValue.length >= 3) {
      const filteredQuestions = questionList.filter((q) => q.question_body.toLowerCase().includes(searchValue.toString().toLowerCase()))
      setFilteredQuestionList(filteredQuestions);
    } else {
      setFilteredQuestionList([]);
    }
  };

  return (
    <div>
      <h2>QUESTIONS & ANSWERS</h2>
      <SearchQuestion handleSearchQuestion={handleSearchQuestion}/>
      {filteredQuestionList.length !== 0
      ? filteredQuestionList.map((question, index) => (
        <Question key={index} question={question} />
        ))
        : questionList.map((question, index) => (
        <Question key={index} question={question} />
      ))}
      <MoreAnsweredQuestions />
      <AddQuestion productId={productId}/>
    </div>
  )
};

export default QuestionAnswers;