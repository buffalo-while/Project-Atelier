import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

function Answer({ answer }) {
  // console.log("question inside answer", question.answer.body);
  // console.log("question ID inside answer", questionId);
  const [hasVoted, setHasVoted] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(answer.helpfulness);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    const hasVotedStorage = localStorage.getItem(`answer${answer.answer_id}voted`);
    if (hasVotedStorage) {
      setHasVoted(true);
    }
  }, [answer.answer_id]);

  useEffect(() => {
    const hasReportedStorage = localStorage.getItem(`answer${answer.answer_id}reported`, 'true');
    if (hasReportedStorage) {
      setReported(true);
    }
  }, [answer.answer_id]);

  const toggleVoted = () => {
    setHasVoted(true);
    localStorage.setItem(`answer${answer.answer_id}voted`, 'true');
  };

  const handleHelpfulVote = () => {
    if (!hasVoted) {
      axios.put(`/api/qa/answers/${answer.answer_id}/helpful`)
        .then(() => {
          setHelpfulCount(helpfulCount + 1);
        })
        .catch((err) => {
          console.log(err);
        });

      toggleVoted();
    }
  };

  const toggleReport = () => {
    setReported(true);
    localStorage.setItem(`answer${answer.answer_id}reported`, 'true');
  };

  const handleReportedAnswer = () => {
    axios.put(`/api/qa/answers/${answer.answer_id}/report`)
      .catch((err) => {
        console.log(err);
      });
    toggleReport();
  };

  return (
    <div>
      <p>
        A:
        {answer.body}
      </p>
      {/* {/* {answer.photos.map((photo, index) => (
        <img key={index} src={photo.url} alt="thumbnail of photo" height="50" width="50" />
      /*} */}
      <p>
        {answer.answerer_name.toLowerCase() === 'seller' ? <b>Seller</b> : answer.answerer_name}

        {' '}
        {dayjs(answer.date).format('MM-DD-YYYY')}
        {' '}
        Helpful?
        {' '}
        {' '}
        <button onClick={handleHelpfulVote}>Yes</button>

        {' '}
        {helpfulCount}
        {' '}
        {' '}
        {' '}
        |
        {' '}
        {' '}
        <button onClick={handleReportedAnswer}>
          {reported ? 'Reported' : 'Report'}
          {' '}
        </button>
      </p>
    </div>
  );
}

export default Answer;
