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

// export const getRatings = async (productIds) => {
//   const ratingsData = await Promise.all(productIds.map((id) => getReviewsMetaData(id)));
//   const ratings = ratingsData.map((ratingData) => {
//     const r = ratingData.data;

//     return (
//       (Number(r[1])
//         + (Number(r[2]) * 2)
//         + (Number(r[3]) * 3)
//         + (Number(r[4]) * 4)
//         + (Number(r[5]) * 5))
//       / (Number(r[1]) + Number(r[2]) + Number(r[3]) + Number(r[4]) + Number(r[5]))
//     );
//   });
//   return ratings;
// };

export const getRatings = async (productIds) => {
  console.log(productIds);
  console.log(getReviewsMetaData(40349), 'metaReviewsAPI call');
  const ratingsData = await Promise.all(productIds.map((id) => getReviewsMetaData(id)));
  console.log(ratingsData, 'ratingsPromise');
  const rMap = ratingsData.map((ratingsData1) => {
    console.log(ratingsData1);
    const metaData = ratingsData1.data;
    // console.log(metaData);
    const { ratings } = metaData;
    let [totalStars, totalReviews] = [0, 0];
    Object.keys(ratings).forEach((key) => {
      totalStars += Number(ratings[key]) * Number(key);
      totalReviews += Number(ratings[key]);
    });
    const meanRating = Math.round((totalStars / totalReviews) * 10) / 10;
    return meanRating;
  });
  return rMap;
};
