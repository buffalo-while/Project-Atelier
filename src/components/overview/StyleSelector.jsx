/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function StyleSelector({
  styles,
  setSelectedStyle,
  selectedStyleName,
  setSelectedStyleId,
}) {
  return (
    <div>
      <h1>
        Style:
        {selectedStyleName}
      </h1>
      <div className="style-thumbnails">
        {styles.map((style, index) => (
          <img
            key={index}
            src={style.photos[0].thumbnail_url}
            alt={`Style ${index + 1}`}
            className={`style-thumbnail ${style.selected ? 'selected-style' : ''}`} // Add a class for styling selected style
            onClick={() => {
              // so wait I need to add the obj? to the
              setSelectedStyleId(style.style_id);
              setSelectedStyle(style);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
