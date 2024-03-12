import React from 'react';
import overviewStyles from './styles/Overview.module.css';

const SloganDescription = ({ product }) => (
  <div className={overviewStyles.sloganContainer}>
    <div className={overviewStyles.sloganDescription}>
      <div>
        <h3 className={overviewStyles.messageDiv} style={{ fontStyle: 'italic' }}>{product.slogan}</h3>
      </div>
      <div>
        <h3 className={overviewStyles.sloganDescription}>{product.description}</h3>
      </div>
    </div>
    <div className={overviewStyles.divider} />
    <div className={overviewStyles.gmoList}>
      <h3 className={overviewStyles.gmo} style={{ fontStyle: 'italic' }}>✔ GMO and Pesticide-Free</h3>
      <h3 className={overviewStyles.gmo} style={{ fontStyle: 'italic' }}>✔ Made with 100% Genetic Modification</h3>
      <h3 className={overviewStyles.gmo} style={{ fontStyle: 'italic' }}>✔ This is made up</h3>
      <h3 className={overviewStyles.gmo} style={{ fontStyle: 'italic' }}>✔ It doesn’t matter</h3>

    </div>
  </div>
);

export default SloganDescription;
