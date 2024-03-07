import React, { useState } from 'react';

function AddToCart({ selectedStyleSkus }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setSelectedQuantity(1);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const sizes = Object.keys(selectedStyleSkus).map((sku) => ({
    sku,
    size: selectedStyleSkus[sku].size,
    quantity: selectedStyleSkus[sku].quantity,
  }));

  const availableSizes = sizes.filter((size) => size.quantity > 0);

  return (
    <div className="addToCart">
      <h2>Add to Cart</h2>
      <select onChange={handleSizeChange} value={selectedSize} disabled={!availableSizes.length}>
        <option value="">Select Size</option>
        {availableSizes.map(size => (
          <option key={size.sku} value={size.size}>{size.size}</option>
        ))}
      </select>

      <select onChange={handleQuantityChange} value={selectedQuantity} disabled={!selectedSize}>
        {Array.from({ length: Math.min(
          15, selectedStyleSkus[selectedSize]?.quantity || 0),
        }, (_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>

      <button type="submit" onClick={() => console.log('Added to Cart: ', selectedSize, selectedQuantity)} disabled={!selectedSize || !availableSizes.length}>
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
