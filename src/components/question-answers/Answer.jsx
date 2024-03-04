import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Answer({answer}) {
  // console.log("question inside answer", question.answer.body);
  // console.log("question ID inside answer", questionId);
  return (
    <div>
      <p>A: {answer.body}</p>
      <p>{answer.answerer_name}{answer.date} Helpful? <a href=''>Yes</a> {answer.helpfulness}</p>
    </div>
  )
}
export default Answer;