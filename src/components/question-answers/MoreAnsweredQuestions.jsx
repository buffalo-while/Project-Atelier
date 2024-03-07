import React, { useState, useEffect } from 'react';

function MoreAnsweredQuestions({ handleLoadingMore }) {
  return (
    <div>
      <button onClick={handleLoadingMore}>MORE ANSWERED QUESTIONS</button>
    </div>
  );
}

export default MoreAnsweredQuestions;
