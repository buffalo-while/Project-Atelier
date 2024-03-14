import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import './lib/relatedProducts.css';
import './lib/relatedCarousel.css';

function RelatedList({
  products, styles, ratings, relatedCardClickHandler, actionButtonHandler, isYourOutfit, addToOutfit,
}) {
  // Carousel Set Up
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
  }, [products]);

  const relatedCardsShown = 4;
  const left = index > 0;
  const right = index < products.length - relatedCardsShown;

  // Button Handlers
  const leftClick = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };
  const rightClick = () => {
    setIndex((prevIndex) => Math.min(products.length - relatedCardsShown, prevIndex + 1));
  };

  return (
    <div className="related-products">
      {left && <button type="button" className="carousel-button" onClick={leftClick}>{'<'}</button>}
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${index * (100 / relatedCardsShown)}%)` }}>
          {products.map((product, key) => (
            <div key={product.id} className="carousel-item">
              {product.id === -1 ? (
                <button type="button" className="add-to-outfit-button" onClick={addToOutfit} style={{ width: '200px', minHeight: '400px' }} key={product.id}>
                  +
                  <br />
                  Add to Outfit
                </button>

              ) : (<RelatedCard product={products[key]} style={styles[key]} rating={ratings[key]} relatedCardClickHandler={relatedCardClickHandler} actionButtonHandler={actionButtonHandler} actionButton={isYourOutfit ? '❌' : '⭐'} />)}
            </div>
          ))}
        </div>
      </div>
      {right ? <button type="button" className="carousel-button" onClick={rightClick}>{'>'}</button> : <div />}
    </div>
  );
}

export default RelatedList;
