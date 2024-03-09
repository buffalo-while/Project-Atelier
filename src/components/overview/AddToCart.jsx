import React, { useState } from 'react';
import axios from 'axios';

function AddToCart({ selectedStyleSkus }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (event) => {
    const sizeSelected = event.target.value;
    setSelectedSize(sizeSelected);
    setSelectedQuantity(1);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const postToCart = () => {
    const payload = {
      // eslint-disable-next-line no-use-before-define
      sku_id: selectedSizeObj.sku,
    };

    axios.post('/api/cart', payload)
      .then((response) => {
        console.log('Successfully added to cart:', response.data);
        alert('Successfully added to cart');
      })
      .catch((error) => {
        console.log('Failed to add to cart: ', error);
        alert('Failed to add to cart. Try again later.');
      });
  };

  const sizes = Object.keys(selectedStyleSkus).map((sku) => ({
    sku,
    size: selectedStyleSkus[sku].size,
    quantity: selectedStyleSkus[sku].quantity,
  }));

  const availableSizes = sizes.filter((size) => size.quantity > 0);

  const selectedSizeObj = sizes.find((size) => size.size === selectedSize);

  const maxQuantity = selectedSizeObj ? Math.min(selectedSizeObj.quantity, 15) : 0;

  return (
    <div className="addToCart">
      <h2>Add to Cart</h2>
      <select onChange={handleSizeChange} value={selectedSize} disabled={!availableSizes.length}>
        <option value="">Select Size</option>
        {availableSizes.map((size) => (
          <option key={size.sku} value={size.size}>{size.size}</option>
        ))}
      </select>

      <select onChange={handleQuantityChange} value={selectedQuantity} disabled={!selectedSize}>
        <option value="">Qty</option>
        {Array.from({ length: maxQuantity }, (_, i) => i + 1).map((qty) => (
          <option key={qty} value={qty}>{qty}</option>
        ))}
      </select>

      <button
        type="submit"
        onClick={postToCart}
        disabled={!selectedSize || maxQuantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
