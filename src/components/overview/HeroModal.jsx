import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import overviewStyles from './styles/Overview.module.css'; // Adjust the import path as needed

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
