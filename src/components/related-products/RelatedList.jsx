import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';
import './lib/relatedProducts.css';

function RelatedList({
  relatedProducts, relatedProductStyles, relatedCardClickHandler, actionButtonHandler, isYourOutfit,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [relatedProducts]);

  const relatedCardsShown = 3;
  const left = index > 0;
  const right = index < relatedProducts.length - relatedCardsShown;

  const leftClick = () => {
    setIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };
  const rightClick = () => {
    setIndex((prevIndex) => Math.min(relatedProducts.length - relatedCardsShown, prevIndex + 1));
  };

  if (relatedProducts.length === 0) {
    return <div />;
  }

  return (
    <div className="related-products-container">
      {left && <button type="button" className="carousel-button" onClick={leftClick}>{'<'}</button>}
      <div className="carousel-container">
        <div className="carousel-track" style={{ transform: `translateX(-${index * (100 / relatedCardsShown)}%)` }}>
          {relatedProducts.map((product, key) => (
            <div className="related-card" key={product.id}>
              <RelatedCard
                product={relatedProducts[key]}
                style={relatedProductStyles[key]}
                relatedCardClickHandler={relatedCardClickHandler}
                actionButtonHandler={actionButtonHandler}
                actionButton={isYourOutfit ? '❌' : '⭐'}
              />
            </div>
          ))}
        </div>
      </div>
      {right && <button type="button" className="carousel-button" onClick={rightClick}>{'>'}</button>}
    </div>
  );
}

export default RelatedList;
