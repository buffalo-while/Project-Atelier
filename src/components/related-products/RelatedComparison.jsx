import React, { useState, useEffect } from 'react';
import compareFunction from './util/compareFunctions.js';

export default function RelatedComparison({ product, relatedProducts, setComparisonModal }) {
  return (
    <div className="comparison-container">
      <button type="button" aria-label="Close Comparison Modal" className="close-button" onClick={() => { setComparisonModal(false); }}>
        X
      </button>
      <h5>Comparison</h5>
      <table>
        <thead>
          <tr>
            <th className="left-header" colSpan="2">{product.name}</th>
            <th className="left-header" colSpan="2">{relatedProducts.name}</th>
          </tr>
        </thead>
        <tbody>
          {compareFunction(product.features, relatedProducts.features).map((feature) => (
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
