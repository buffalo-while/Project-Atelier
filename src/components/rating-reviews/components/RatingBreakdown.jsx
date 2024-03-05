import React, { useEffect } from 'react';

function RatingBreakdown({
  productId, getRatings, metaResults, setMetaResults,
}) {
  useEffect(() => {
    if (getRatings) {
      getRatings(productId)
        .then((results) => {
          // console.log('Results from calling getRatings on productId: ', results);
          setMetaResults(results);
        });
    }
  }, [getRatings, productId, setMetaResults]);

  function starsBar(numStars, currMetaResults) {
    // some code
    console.log('numStars: ', numStars);
    console.log('currMetaResults: ', currMetaResults);
    let barElement = (
      <div>
        <span className="num-stars" name="num-stars" key={numStars} style={{ width: '15%', float: 'left' }}>
          {`${numStars} star${numStars === 1 ? '' : 's'}`}
        </span>
        <span className="stars-bar-loading" name="stars-bar-loading">
          Loading...
        </span>
      </div>
    );
    if (currMetaResults.allMetaData && currMetaResults.allMetaData.ratings) {
      const { totalReviews, allMetaData } = currMetaResults;
      const rating = allMetaData.ratings[numStars] ? allMetaData.ratings[numStars] : 0;
      barElement = (
        <div>
          <span className="num-stars" name="num-stars" key={numStars} style={{ width: '15%', float: 'left' }}>
            {`${numStars} stars`}
          </span>
          <span
            className="stars-bar"
            name="stars-bar"
            style={{
              width: '70%',
              height: '0.5em',
              display: 'inline-block',
              verticalAlign: 'middle',
              backgroundColor: '#EFEFEF',
            }}
          >
            <span
              className="stars-bar-filled"
              name="stars-bar"
              style={{
                width: `${(rating / totalReviews) * 70}%`,
                backgroundColor: '#004346',
                position: 'absolute',
                height: '0.5em',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </span>
        </div>
      );
    }
    return (
      <div>
        {barElement}
      </div>
    );
  }

  function starsBars(currMetaResults) {
    return [...Array(5).keys()].map((index) => (
      starsBar(5 - Number(index), currMetaResults)
    ));
  }

  return (
    <aside className="rating-breakdown">
      <header className="rating-summary" name="rating-summary">
        <span className="ave-rating" name="ave-rating">{metaResults.meanRating}</span>
        {metaResults.RatingStars}
      </header>
      <section className="rating-breakdown" name="rating-breakdown">
        {starsBars(metaResults)}
      </section>
    </aside>
  );
}

export default RatingBreakdown;
