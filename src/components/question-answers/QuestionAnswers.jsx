import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import SearchQuestion from './SearchQuestion.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './AddQuestion.jsx';
import styles from './styles/QuestionAnswers.module.css';

function QuestionAnswers({ productId, productName }) {
  const [questionList, setQuestionList] = useState([]);
  const [filteredQuestionList, setFilteredQuestionList] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(4);
  const [remainingQuestions, setRemainingQuestions] = useState(0);

  useEffect(() => {
    axios.get(`/api/qa/questions/?product_id=${productId}&page=1&count=50`)
      .then((response) => {
        console.log('response.data', response.data.results);
        setQuestionList(response.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness));
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, [productId]);

  useEffect(() => {
    setRemainingQuestions(questionList.length - visibleQuestions);
  }, [questionList, visibleQuestions]);

  const handleSearchQuestion = (event, searchValue) => {
    event.preventDefault();
    // console.log("searchValue", searchValue);

    if (searchValue.length >= 3) {
      const filteredQuestions = questionList.filter((q) => q.question_body.toLowerCase().includes(searchValue.toString().toLowerCase()));
      setFilteredQuestionList(filteredQuestions);
    } else {
      setFilteredQuestionList([]);
    }
  };

  const handleLoadingMore = () => {
    console.log('loading two more questons');
    setVisibleQuestions(visibleQuestions + 2);
  };

  return (
    <div>
      <h4 className={styles.qnaHeader}>QUESTIONS & ANSWERS</h4>
      <SearchQuestion handleSearchQuestion={handleSearchQuestion} />
      {questionList.length > 0 ?
        <div className={styles.qnaContainer} >
          {filteredQuestionList.length !== 0
            ? filteredQuestionList.slice(0, visibleQuestions).map((question) => (
              <Question key={question.question_id} question={question} productId={productId} productName={productName} />
            ))
            : questionList.slice(0, visibleQuestions).map((question) => (
              <Question key={question.question_id} question={question} productId={productId} productName={productName} />
            ))}
          <div className={styles.qnaButtons}>
            {remainingQuestions > 2 ? <MoreAnsweredQuestions handleLoadingMore={handleLoadingMore} /> : null}
            <AddQuestion productId={productId} />
          </div>
          {/* // <MoreAnsweredQuestions handleLoadingMore={handleLoadingMore} /> */}
        </div>
        : <AddQuestion productId={productId} productName={productName} />}
    </div>
  );
}

export default QuestionAnswers;
