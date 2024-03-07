import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx';

function RelatedList({ relatedProducts, relatedProductStyles }) {
  // console.log(relatedProductStyles, 'default index')
  return (
    <div>
      {relatedProducts.map((product, index) => (
        <div key={product.id}>
          <RelatedCard
            product={relatedProducts[index]}
            style={relatedProductStyles[index]}
          />
        </div>
      ))}
    </div>
  );
}

export default RelatedList;
