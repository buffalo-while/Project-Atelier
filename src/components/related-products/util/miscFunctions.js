import { getProductStyles, getReviewsMetaData } from './relatedModels.js';

export const getProductsStyles = async (productIds) => {
  const styles = await Promise.all(productIds.map((id) => getProductStyles(id)));
  const defaultStyles = styles.map((stylesData) => {
    let defaultIndex = stylesData.data.results.findIndex((style) => style['default?'] === true);
    if (defaultIndex === -1) {
      defaultIndex = 0;
    }
    return stylesData.data.results[defaultIndex];
  });
  return defaultStyles;
};

export function getOutfitFromCookie() {
  const outfitCookie = document.cookie?.match(/(?:(?:^|.*;\s*)outfit\s*=\s*([^;]*).*$)|^.*$/)?.[1];
  return outfitCookie ? JSON.parse(outfitCookie) : [];
}

export const getRatings = async (productIds) => {
  const ratingsData = await Promise.all(productIds.map((id) => getReviewsMetaData(id)));
  const ratings = ratingsData.map((ratingData) => {
    const rating = ratingData.data.ratings;
    return (
      (Number(rating[1])
        + (Number(rating[2]) * 2)
        + (Number(rating[3]) * 3)
        + (Number(rating[4]) * 4)
        + (Number(rating[5]) * 5))
      / (Number(rating[1])
        + Number(rating[2])
        + Number(rating[3])
        + Number(rating[4])
        + Number(rating[5]))
    );
  });
  return ratings;
};
