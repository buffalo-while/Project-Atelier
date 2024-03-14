import React from 'react';
import compareFunction from './util/compareFunctions.js';
import './styles/relatedComparison.css';

export default function RelatedComparison({ product, comparedProduct, setComparisonModal }) {
  return (
    <div className="comparison-container">
      <button type="button" aria-label="Close Comparison" className="close-button" onClick={() => { setComparisonModal(false); }}>
        X
      </button>
      <h5>Clothing Comparison</h5>
      <table>
        <thead>
          <tr>
            <th className="left-header" colSpan="2">{product.name}</th>
            <th className="right-header" colSpan="2">{comparedProduct.name}</th>
          </tr>
        </thead>
        <tbody>
          {compareFunction(product.features, comparedProduct.features).map((feature) => (
            <tr>
              <td className="value">{feature[0] === true ? '✔' : ''}</td>
              <td className="feature" colSpan="2">{feature[1]}</td>
              <td className="value">{feature[2] === true ? '✔' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
