import React from 'react';
import ImageGallery from '../overview/ImageGallery.jsx'

const RelatedCard = ({ product, style }) => {
  // console.log(style,'cardStyles')
  // console.log(product, 'productInfo')
  return (
    <div>
      <div>
      <img height='100' width='100' src={style ? style : 'https://i.imgur.com/mYzivnl.png'} alt={product.name} />
      {/* <ImageGallery productId={product}/> */}
      </div>
      <p>Generate Product #: {product.id}</p>
      <h3>Name: {product.name}</h3>
      <p>Category: {product.category}
      <br></br>
        Slogan: {product.slogan}
      </p>
    </div>
  );
};

export default RelatedCard;
