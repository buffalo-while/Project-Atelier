import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import overviewStyles from './styles/Overview.module.css';

function HeroModal({ heroImageUrl }) {
  const [heroModal, setHeroModal] = useState(false);

  const toggleModal = () => {
    setHeroModal(!heroModal);
  };

  if (heroModal) {
    document.body.classList.add(overviewStyles.activeModal);
  } else {
    document.body.classList.remove(overviewStyles.activeModal);
  }

  return (
    <div className={overviewStyles.modalContainer}>
      <FaExpandArrowsAlt
        onClick={toggleModal}
        className={overviewStyles.arrowIcon}
        style={{
          position: 'absolute',
          right: '190px',
          top: '230px',
          zIndex: 1000, // Ensure it's above all other content
        }}
        type="submit"/>
      {heroModal && (
      <div className={overviewStyles.heroModal}>
        <div
          onClick={toggleModal}
          className={overviewStyles.overlay}
        />
        <div className={overviewStyles.modalContent}>
          {heroImageUrl ? <img src={heroImageUrl} alt="Hero" className={overviewStyles.heroImageModal} /> : <p>Loading...</p>}
          <FaExpandArrowsAlt onClick={toggleModal} className={overviewStyles.closeModal} />
        </div>
      </div>
      )}
    </div>
  );
}

export default HeroModal;
