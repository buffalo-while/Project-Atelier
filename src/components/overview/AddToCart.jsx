import React, { useState } from 'react';
import axios from 'axios';

function AddToCart({ selectedStyleSkus }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleSizeChange = (event) => {
    const sizeSelected = event.target.value;
    setSelectedSize(sizeSelected);
    // Reset quantity to 1 whenever size changes
    setSelectedQuantity(1);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const postToCart = () => {
    const payload = {
      sku_id: selectedSizeObj.sku,
      qty: selectedQuantity,
    };

    axios.post('/api/cart', payload)
      .then((response) => {
        console.log('Successfully added to cart:', response.data)
        alert('Successfully added to cart');
      })
  };

  const sizes = Object.keys(selectedStyleSkus).map((sku) => ({
    sku,
    size: selectedStyleSkus[sku].size,
    quantity: selectedStyleSkus[sku].quantity,
  }));

  const availableSizes = sizes.filter((size) => size.quantity > 0);

  const selectedSizeObj = sizes.find((size) => size.size === selectedSize);
  console.log('selectedSizeObj', selectedSizeObj);

  const maxQuantity = selectedSizeObj ? Math.min(selectedSizeObj.quantity, 15) : 0;
  console.log(selectedSize)

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

      <button type="submit"
        onClick={() => console.log('Added to Cart: ', selectedSize, selectedQuantity)}
        disabled={!selectedSize || maxQuantity === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
