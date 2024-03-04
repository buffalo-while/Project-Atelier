import React, { useState, useEffect} from 'react';
import RelatedCard from './RelatedCard.jsx'

const RelatedList = () => {
const [relatedProducts, setRelatedProducts] = useState([])

  return (
    <div>{
      relatedProducts.map((product, index) => (
        <RelatedCard key={index} product={product}/>
      ))
      }</div>
  )
}

export default RelatedList;
