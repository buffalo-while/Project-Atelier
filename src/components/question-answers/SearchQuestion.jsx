import React from 'react';
import { useState, useEffect } from 'react';

function SearchQuestion({handleSearchQuestion}) {

  const [searchValue, setSearchValue] = useState('');

  return(
    <div>
      <form onSubmit={(e) => handleSearchQuestion(searchValue)}>
      <p>Search for Question here...</p>
      <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      </form>
    </div>
  )
};


export default SearchQuestion;