import React, { useState, useEffect, useCallback } from 'react';
import RelatedList from './RelatedList.jsx';
import RelatedComparison from './RelatedComparison.jsx';
import CompareModal from './util/CompareModal.jsx';
import { getProductsStyles, getOutfitFromCookie } from './util/miscFunctions.js';
import { getProduct, getRelatedProducts } from './util/relatedModels.js';
import getRatings from '../rating-reviews/controllers/getRatings.jsx';

function RelatedProducts({ productId, setProductId }) {
  const [currentProductInfo, setProductInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      const meta = await getProduct(productId);
      setProductInfo(meta.data);
    };
    getInfo();
  }, [productId]);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsStyles, setRelatedProductsStyles] = useState([]);
  const [relatedProductRatings, setRelatedProductRatings] = useState([]);

  const [comparisonModal, setComparisonModal] = useState(false);
  const [comparedProduct, setComparedProduct] = useState({});

  const [outfitProducts, setOutfitProducts] = useState([{ id: -1 }]);
  const [outfitProductIds, setOutfitProductIds] = useState([]);
  const [outfitProductsStyles, setOutfitProductsStyles] = useState([]);
  const [outfitRatings, setOutfitRatings] = useState([]);

  useEffect(() => {
    const getRelatedProductData = async () => {
      const relatedProductsIds = await getRelatedProducts(productId);
      const uniqueRelatedProductIds = relatedProductsIds.data.filter(
        (value, index, array) => array.indexOf(value) === index,
      );
      const uniqueRelatedProducts = await Promise.all(uniqueRelatedProductIds.map(
        (id) => getProduct(id),
      ));
      const defaultStyles = await getProductsStyles(uniqueRelatedProductIds);
      const ratings = await getRatings(uniqueRelatedProductIds);
      setRelatedProducts(uniqueRelatedProducts.map(
        (uniqueRelatedProduct) => uniqueRelatedProduct.data,
      ));
      setRelatedProductsStyles(defaultStyles);
      setRelatedProductRatings(ratings);
    };
    getRelatedProductData();
  }, [productId]);

  const relatedCardClickHandler = useCallback((id) => {
    setProductId(id);
  }, []);

  const actionButtonHandler = useCallback((product) => {
    setComparedProduct(product);
    setComparisonModal(true);
  }, []);

  useEffect(() => {
    const outfitFromCookie = getOutfitFromCookie();
    const getOutfitData = async () => {
      const outfitProductsData = await Promise.all(outfitFromCookie.map((id) => getProduct(id)));
      const defaultStyles = await getProductsStyles(outfitFromCookie);
      const ratings = await getRatings(outfitFromCookie);
      setOutfitProductIds([-1].concat(outfitFromCookie));
      setOutfitProducts([{ id: -1 }].concat(outfitProductsData.map(
        (uniqueRelatedProduct) => uniqueRelatedProduct.data,
      )));
      setOutfitProductsStyles([null].concat(defaultStyles));
      setOutfitRatings([null].concat(ratings));
    };
    getOutfitData();
  }, []);

  const addToOutfitHandler = useCallback(async () => {
    if (outfitProductIds.includes(productId)) {
      console.log(`Product ID: ${productId} already in Your Outfit`);
    } else {
      const [defaultStyle] = await getProductsStyles([productId]);
      const [rating] = await getRatings([productId]);
      const outfitString = JSON.stringify([productId].concat(outfitProductIds.slice(1)));
      document.cookie = `outfit=${outfitString}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
      setOutfitProductIds([-1, productId].concat(outfitProductIds.slice(1)));
      setOutfitProducts([{ id: -1 }, currentProductInfo].concat(outfitProducts.slice(1)));
      setOutfitProductsStyles([null, defaultStyle].concat(outfitProductsStyles.slice(1)));
      setOutfitRatings([null, rating].concat(outfitRatings.slice(1)));
    }
  }, [productId, currentProductInfo, outfitProductsStyles, outfitRatings, outfitProductIds, outfitProducts]);

  const removeFromOutfitHandler = useCallback((product) => {
    const indexToRemove = outfitProductIds.findIndex((productKey) => productKey === product.id);
    const outfitString = JSON.stringify(outfitProductIds.filter(
      (val, index) => index !== indexToRemove,
    ).slice(1));
    document.cookie = `outfit=${outfitString} path=/`;
    setOutfitProductIds(outfitProductIds.filter((val, index) => index !== indexToRemove));
    setOutfitProducts(outfitProducts.filter((val, index) => index !== indexToRemove));
    setOutfitProductsStyles(outfitProductsStyles.filter((val, index) => index !== indexToRemove));
    setOutfitRatings(outfitRatings.filter((val, index) => index !== indexToRemove));
  }, [productId, currentProductInfo, outfitProductIds, outfitProducts, outfitProductsStyles, outfitRatings]);

  return (
    <div>
      <h2>Related Products</h2>
      <RelatedList
        products={relatedProducts}
        styles={relatedProductsStyles}
        ratings={relatedProductRatings}
        relatedCardClickHandler={relatedCardClickHandler}
        actionButtonHandler={actionButtonHandler}
        isYourOutfit={false}
      />
      <h2>Given Outfit</h2>
      <RelatedList
        products={outfitProducts}
        styles={outfitProductsStyles}
        ratings={outfitRatings}
        relatedCardClickHandler={relatedCardClickHandler}
        actionButtonHandler={removeFromOutfitHandler}
        isYourOutfit
        addToOutfit={addToOutfitHandler}
      />
      {
        comparisonModal
        && (
          <CompareModal>
            <RelatedComparison
              product={currentProductInfo}
              comparedProduct={comparedProduct}
              setComparisonModal={setComparisonModal}
            />
          </CompareModal>
        )
      }
    </div>
  );
}

export default RelatedProducts;
