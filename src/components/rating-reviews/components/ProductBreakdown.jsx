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
    console.log(metaChars);
    return Object.keys(charDescriptions)
      .filter((char) => (metaChars[char]))
      .map((char) => (
        <div key={char}>
          <p>char</p>
          <div />
          <div>
            <div>
              <p>{charDescriptions[char][0]}</p>
            </div>
            <div>
              <p>{charDescriptions[char][1]}</p>
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
