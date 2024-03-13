import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function StarButton() {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
  };

  return (
    <button id="favorite" aria-label="starButton" type="submit" onClick={toggleFill} style={{ background: 'transparent', border: '2px solid', cursor: 'pointer' }}>
      {isFilled ? <FaStar color="#f39c12" /> : <FaRegStar color="#f39c12" />}
    </button>
  );
}

export default StarButton;
