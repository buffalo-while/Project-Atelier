import React, { useState, useEffect } from "react";
import { getReviewsMetaData } from "../models/reviewsModels.js";

const RatingBreakdown = ({ productId, getRatings }) => {
  const [ratingStars, setRatingStars] = useState(<p className={"stars"}>Loading</p>);

  useEffect(()=> {
    getRatings(productId)
    .then((metaResults) => {
      console.log('Got results from promise: ', metaResults);
      setRatingStars(metaResults.RatingStars);
    })
  }, []);


  return(
  <aside className="rating-breakdown">
    {ratingStars}
  </aside>
  );
};

export default RatingBreakdown;