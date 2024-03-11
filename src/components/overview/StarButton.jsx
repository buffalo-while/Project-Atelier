import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function StarButton() {
  const [isFilled, setIsFilled] = useState(false);

  const toggleFill = () => {
    setIsFilled(!isFilled);
    alert('Added to Favorites!');
  };

  return (
    <button type="submit" onClick={toggleFill} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
      {isFilled ? <FaStar color="#f39c12" /> : <FaRegStar color="#f39c12" />}
    </button>
  );
}

export default StarButton;
