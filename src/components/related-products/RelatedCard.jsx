import React from 'react';
import './lib/relatedProducts.css';
// import ImageGallery from '../overview/ImageGallery.jsx'

function RelatedCard({
  product, style, relatedCardClickHandler, actionButtonHandler, actionButton
}) {
  // console.log(style,'cardStyles')
  // console.log(product, 'productInfo')
  return (
    <div
      data-testid="related-card"
      role="button"
      tabIndex="0"
      aria-label="productDetails"
      className="product-card"
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          relatedCardClickHandler(product.id);
        }
      }}
      onClick={() => { relatedCardClickHandler(product.id); }}
    >
      <div className="image-card">
        <img
          height="100"
          width="100"
          src={style ? style : 'https://tracerproducts.com/wp-content/uploads/2019/12/Product-Image-Coming-Soon.jpg'}
          alt={product.name}
        />
        <button
          type="button"
          aria-label={actionButtonHandler === '⭐' ? 'Compare Products' : 'remove product'}
          className="actionButton"
          onClick={(e) => {
            e.stopPropagation();
            actionButtonHandler(product);
          }}
        >
          {actionButton}
        </button>
        {/* <ImageGallery productId={product}/> */}
      </div>
      <p>
        Generate Product #
        {product.id}
      </p>
      <h3>
        Name:
        {product.name}
      </h3>
      <p>
        Category:
        {product.category}
        <br />
        Slogan:
        {product.slogan}
      </p>
    </div>
  );
}

export default RelatedCard;
