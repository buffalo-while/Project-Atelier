import React from 'react';

function ProductBreakdown({ metaResults }) {
  const charDescriptions = {
    Size: ['A size too small', 'A size too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long'],
  };

  const applicableChars = () => {
    let metaChars = {};
    if (!metaResults.allMetaData) {
      return null;
    }
    metaChars = metaResults.allMetaData.characteristics;
    console.log(metaChars.Comfort.value);
    return Object.keys(charDescriptions)
      .filter((char) => (metaChars[char]))
      .map((char) => (
        <div key={char}>
          <p>{char}</p>
          <div className="rating-prod-char" name="characterisic-rating" value={(metaChars[char]).value}>
            <div>
              <div className="rating-prod-bar">
                <span
                  style={{
                    position: 'relative',
                    bottom: '0.15em',
                    left: `${(((metaChars[char]).value - 1) / 4) * 95}%`,
                    fontSize: '1.2em',
                  }}
                >
                  &#9660;
                </span>
              </div>
            </div>
            <div className="rating-char-desc">
              <div className="rating-char-low">
                <p>{charDescriptions[char][0]}</p>
              </div>
              <div className="rating-char-high">
                <p>{charDescriptions[char][1]}</p>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <aside>{applicableChars()}</aside>
  );
}

export default ProductBreakdown;
