import React from 'react';

const RelatedCard = ({ productInfo, defaultStyle }) => {
  return (
    <div>
      {/* <div>
        <img src={defaultStyle.photos[0].thumbnail_url ? defaultStyle.photos[0].thumbnail_url : 'https://i.imgur.com/mYzivnl.png'} alt={productInfo.name} />
      </div> */}
      <p>Card Generator</p>
      <p>{productInfo.category}</p>
      <h3>{productInfo.name}</h3>
    </div>
  )
}



export default RelatedCard;
