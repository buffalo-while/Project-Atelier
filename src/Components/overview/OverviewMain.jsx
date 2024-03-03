import React from 'react';
import ImageGallery from './ImageGallery.jsx'

function OverviewMain({ productId }) {
  return (
    <div>
      <h1>Overview</h1>
      <ImageGallery productId={productId}/>
    </div>
  );
}

export default OverviewMain
