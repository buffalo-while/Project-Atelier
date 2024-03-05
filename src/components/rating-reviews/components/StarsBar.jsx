import React from 'react';

function StarsBar({ numStars, metaResults }) {
  // console.log('numStars: ', numStars);
  // console.log('metaResults: ', metaResults);
  let barElement = (
    <>
      <span className="num-stars" name="num-stars" style={{ width: '15%', float: 'left' }}>
        {`${numStars} stars`}
      </span>
      <span className="stars-bar-loading" name="stars-bar-loading">
        Loading...
      </span>
    </>
  );
  if (metaResults.allMetaData && metaResults.allMetaData.ratings) {
    const { totalReviews, allMetaData } = metaResults;
    const rating = allMetaData.ratings[numStars] ? allMetaData.ratings[numStars] : 0;
    barElement = (
      <>
        <span className="num-stars" name="num-stars" style={{ width: '15%', float: 'left' }}>
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
        <span className="count-stars" name="count-stars" style={{ width: '15%', float: 'right' }}>
          {rating}
        </span>
      </>
    );
  }
  return (
    <div className="rating-by-stars" name="rating-by-stars">
      {barElement}
    </div>
  );
}

export default StarsBar;
