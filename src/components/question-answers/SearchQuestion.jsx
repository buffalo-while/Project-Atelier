import React, { useState } from 'react';

function SearchQuestion({ handleSearchQuestion }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div data-testid="search-question-container">
      <form onSubmit={(e) => handleSearchQuestion(e, searchValue)}>
        <p>Search for Question here...</p>
        <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      </form>
    </div>
  );
}

export default SearchQuestion;
