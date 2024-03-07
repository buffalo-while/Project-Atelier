import React, { useState, useEffect } from 'react';
import RelatedList from './RelatedList.jsx';
import { getProduct, getRelatedProducts, getProductStyles } from './util/relatedModels.js';

function RelatedProducts({ productId }) {
  //To Do:
  // Create a useState that will be made for Related Products and Outfit
  // Give those useStates to the RelatedList to generate the carousel
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsStyles, setRelatedProductsStyles] = useState([]);

  const populateRelatedProductData = async () => {
    const relatedProductIDs = await getRelatedProducts(productId);
    const uniqueRelatedProductIds = relatedProductIDs.data.filter((value, index, array) => array.indexOf(value) === index);
    const uniqueRelatedProducts = await Promise.all(uniqueRelatedProductIds.map((id) => getProduct(id)));
    // console.log(uniqueRelatedProducts,'test')
    setRelatedProducts(uniqueRelatedProducts.map((uniqueRelatedProduct) => uniqueRelatedProduct.data));
    // console.log(uniqueRelatedProducts.map((uniqueRelatedProduct) => uniqueRelatedProduct.data),'set related products')
  };

  const populateRelatedStylesData = async () => {
    const relatedProductIDs = await getRelatedProducts(productId);
    const uniqueRelatedProductIds = relatedProductIDs.data.filter((value, index, array) => array.indexOf(value) === index);
    const defaultStyles = await Promise.all(uniqueRelatedProductIds.map((id) => getProductStyles(id)));
    // // console.log(defaultStyles, 'styles');
    setRelatedProductsStyles(defaultStyles.map((defaultStyle) => defaultStyle.data.results[0].photos[0].thumbnail_url));
    // console.log(defaultStyles.map((defaultStyle) => defaultStyle.data), 'set styles.data')
    //  console.log(defaultStyles.map((defaultStyle) => defaultStyle.data.results), 'set styles.result')
  };

  useEffect(() => {
    populateRelatedProductData();
    populateRelatedStylesData();
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

  );
};

export default RelatedProducts;
