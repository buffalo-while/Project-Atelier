import React from 'react';
// import ImageGallery from '../overview/ImageGallery.jsx'

function RelatedCard({ product, style }) {
  // console.log(style,'cardStyles')
  // console.log(product, 'productInfo')
  return (
    <div data-testid="related-card">
      <div>
        <img height='100' width='100' src={style ? style : 'https://tracerproducts.com/wp-content/uploads/2019/12/Product-Image-Coming-Soon.jpg'} alt={product.name} />
        {/* <ImageGallery productId={product}/> */}
      </div>
      <p>
        Generate Product #:
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
