import React from 'react';
import styles from '../styles/WriteReviewCharacteristics.module.css';

function WriteReviewCharacteristics({ metaResults, characteristics, setCharacteristics }) {
  const charDescriptions = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };
  const metaChars = metaResults.allMetaData.characteristics;
  const applicableChars = () => (
    Object.keys(charDescriptions)
      .filter((char) => (metaChars[char]))
      .map((char) => (
        <div key={char} className={styles.charRatingsFull}>
          <span className={styles.charRatingsTitle}>
            {char}
            {': '}
          </span>
          <span className={styles.charRatings}>
            {([...Array(5)]).map((charValue, index) => {
              const currCharRating = index + 1;
              return (
                <div className={styles.charRating} key={currCharRating}>
                  <label htmlFor={`${char}${currCharRating}`} className={styles.charRatingLabel}>
                    {charDescriptions[char][index]}
                  </label>
                  <input
                    type="radio"
                    name={`${char}-rating-radio`}
                    id={`${char}${currCharRating}`}
                    data-testid={`${char}${currCharRating}`}
                    value={currCharRating}
                    onChange={() => {
                      const newChars = { ...characteristics };
                      newChars[(metaChars[char]).id] = currCharRating;
                      setCharacteristics(newChars);
                    }}
                    className={styles.charRatingRadio}
                  />
                </div>
              );
            })}
          </span>
        </div>
      ))
  );

  return (
    <div>
      <div className={styles.writeReviewLabel}>
        Characteristics
        <span className={styles.reviewAsterisk}>*</span>
      </div>
      {applicableChars()}
    </div>
  );
}

export default WriteReviewCharacteristics;
