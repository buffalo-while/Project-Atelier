import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons-fa';

function HeroModal ({ heroImageUrl}) {
  const [heroModal, setHeroModal] = useState(false);

  const toggleModal = () => {
    setHeroModal(!heroModal);
  };

  return (
    <>
      <FaExpandArrowsAlt    onClick={toggleModal}
        className="btn-modal"
        type="submit"/>
      {heroModal && (
      <div className="hero-modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Hello Modal</h2>
          {heroImageUrl ? <img src={heroImageUrl} alt="hero" className="hero-image-modal" /> : <p>Loading...</p>}
          <button type="submit" onClick={toggleModal} className="close-modal">Close</button>
        </div>
      </div>
      )}

    </>
  );
}

export default HeroModal;
