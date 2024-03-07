import React from 'react';

function StyleSelector({
  styles,
  setSelectedStyleId,
  selectedStyleName,
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
              // Call the function passed from the parent to update the selected style
              setSelectedStyleId(style.style_id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default StyleSelector;
