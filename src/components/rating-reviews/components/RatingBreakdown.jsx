import React, { useState } from "react";

const RatingBreakdown = ({ productId, getRatings }) => {
  const [ratingStars, setRatingStars] = useState(<p>Loading</p>);
  // getRatings(productId)
  //   .then((metaResults) => {
  //     console.log('Got results from promise: ', metaResults);
  //     setRatingStars(metaResults.RatingStars);
  // })


  return(
  <aside className="rating-breakdown">
    {ratingStars}
  </aside>
  );
};

export default RatingBreakdown;