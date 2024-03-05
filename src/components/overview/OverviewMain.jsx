import React from 'react';
import ImageGallery from './ImageGallery.jsx'
import ProdInfo from './ProdInfo.jsx'

function OverviewMain({ productId }) {
  return (
    <div>
      <h1>productId: {productId}</h1>
      <div className="content-container-1">
      <ImageGallery className="image-gallery" productId={productId}/>
      <ProdInfo className="product-info" />
      </div>
    </div>
  );
}

export default OverviewMain