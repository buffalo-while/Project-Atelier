import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

function Answer({ answer }) {
  // console.log("question inside answer", question.answer.body);
  // console.log("question ID inside answer", questionId);
  return (
    <div>
      <p>A: {answer.body}</p>
      {/* {/* {answer.photos.map((photo, index) => (
        <img key={index} src={photo.url} alt="thumbnail of photo" height="50" width="50" />
      /*} */}
      <p>{answer.answerer_name} {dayjs(answer.date).format('MM-DD-YYYY')} Helpful? <a href=''>Yes</a> {answer.helpfulness}</p>
    </div>
  );
}

export default Answer;
