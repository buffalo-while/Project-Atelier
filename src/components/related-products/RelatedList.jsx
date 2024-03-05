import React, { useState, useEffect } from 'react';
import RelatedCard from './RelatedCard.jsx'

const RelatedList = ({relatedProducts, relatedProductStyles }) => {

  return (
    <div>
      {relatedProducts.map((product, index) => (
        <RelatedCard productInfo={relatedProducts[index]} defaultStyle={relatedProductStyles[index]} />
      ))
    }
    </div>
  )
}

export default RelatedList;
