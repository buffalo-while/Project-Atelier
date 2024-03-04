import React, { useState, useEffect } from 'react';
import RelatedList from './RelatedList.jsx';

const RelatedProducts = ({productId}) => {
  //To Do:
  // Create a useState that will be made for Related Products and Outfit
  // Give those useStates to the RelatedList to generate the carousel

  return (
    <div>
      {/* Related Items Section */}
      <h2>Related Products</h2>
      <RelatedList />
      {/* This will be for the Outfit Section */}
      <h2>Given Outfit</h2>
      <RelatedList />
    </div>

  )
}

export default RelatedProducts;
