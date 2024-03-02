import React from "react";
import { getReviewsMetaData } from "../models/reviewsModels.js";

const getRatings = (product_id, cssClass) => {
  return getReviewsMetaData(product_id)
  .then((res)=>{
    const metaData = res.data;
    //calculate average rating
    const { ratings }  = metaData;
    let [totalStars, totalReviews] = [0, 0];
    for (let key in ratings) {
      totalStars += Number(ratings[key]) * Number(key);
      totalReviews += Number(ratings[key]);
    }
    const meanRating = Math.round((totalStars / totalReviews) * 10) / 10;
    //create results object
    const metaResults = {};
    metaResults.totalReviews = totalReviews.toString();
    metaResults.meanRating = meanRating.toString();
    metaResults.RatingStars = <p className={cssClass}>Stars still in dev, average rating is {meanRating}</p>;
    metaResults.allMetaData = metaData;
    return metaResults;
  }).catch((err) => {
    console.log('Error getting metaData: ', err);
    const errResults = {};
    errResults.totalReviews = 'N/A';
    errResults.meanRating = 'N/A';
    errResults.RatingStars = <p className={cssClass}>Unable to show rating</p>;
    errResults.allMetaData = {};
    return errResults;
  })
};

export default getRatings;