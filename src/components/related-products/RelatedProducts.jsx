import React, { useState, useEffect } from 'react';
import RelatedList from './RelatedList.jsx';
import { getProduct, getRelatedProducts, getProductStyles } from './util/relatedModels.js';

const RelatedProducts = ({ productId }) => {
  //To Do:
  // Create a useState that will be made for Related Products and Outfit
  // Give those useStates to the RelatedList to generate the carousel
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsStyles, setRelatedProductsStyles] = useState([]);


  useEffect(() => {
    const getRelatedData = async () => {
      const relatedProductIDs = await getRelatedProducts(productId);
      const uniqueRelatedProductIds = relatedProductIDs.data.filter((value, index, array) => array.indexOf(value) === index);
      const uniqueRelatedProducts = await Promise.all(uniqueRelatedProductIds.map((id) => getProduct(id)));
      // const defaultStyles = await getProductStyles(uniqueRelatedProductIds);
      setRelatedProducts(uniqueRelatedProducts.map((uniqueRelatedProduct) => uniqueRelatedProduct.data));
      // setRelatedProductsStyles(defaultStyles);
    };
    getRelatedData();
  }, [productId])


  return (
    <div>
      {/* Related Items Section */}
      <h2>Related Products</h2>
      <RelatedList
        relatedProducts={relatedProducts}
        relatedProductStyles={relatedProductsStyles}
      />
      {/* This will be for the Outfit Section */}
      <h2>Given Outfit</h2>
      {/* <RelatedList /> */}
    </div>

  )
}

export default RelatedProducts;
