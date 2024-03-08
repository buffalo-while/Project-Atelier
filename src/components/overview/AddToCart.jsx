import React, { useState } from 'react';

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

  // Mapping SKUs to an array containing size and quantity information
  const sizes = Object.keys(selectedStyleSkus).map((sku) => ({
    sku,
    size: selectedStyleSkus[sku].size,
    quantity: selectedStyleSkus[sku].quantity,
  }));

  // Filter to get only available sizes
  const availableSizes = sizes.filter((size) => size.quantity > 0);

  // Find the selected size object to get its available quantity
  const selectedSizeObj = sizes.find((size) => size.size === selectedSize);

  // Calculate the maximum quantity for the selected size
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

      <button type="submit" onClick={() => console.log('Added to Cart: ', selectedSize, selectedQuantity)} disabled={!selectedSize || maxQuantity === 0}>
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;

// import React, { useState } from 'react';

// function AddToCart({ selectedStyleSkus }) {
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedQuantity, setSelectedQuantity] = useState(1);

//   const handleSizeChange = (event) => {
//     setSelectedSize(event.target.value);
//     setSelectedQuantity(1);
//   };

//   const handleQuantityChange = (event) => {
//     setSelectedQuantity(event.target.value);
//   };

//   // selectedSize is
//   // quanitites is returning the quantities of all possible sizes, we need to show only the sizes from 1 to max of the selected Qty

//   const sizes = Object.keys(selectedStyleSkus).map((sku) => ({
//     sku,
//     size: selectedStyleSkus[sku].size,
//     quantity: selectedStyleSkus[sku].quantity,
//   }));

//   const availableSizes = sizes.filter((size) => size.quantity > 0);
//   const availableQuantities = sizes.filter((size) => selectedSize.quantity);


//   return (
//     <div className="addToCart">
//       <h2>Add to Cart</h2>

//       <select onChange={handleSizeChange} value={selectedSize} disabled={!availableSizes.length}>
//         <option value="">Select Size</option>
//         {availableSizes.map((size) => (
//           <option key={size.sku} value={size.size}>{size.size}</option>
//         ))}
//       </select>

//       <select onChange={handleQuantityChange} value={selectedQuantity} disabled={!selectedSize}>
//         <option value="">Qty</option>
//         {availableSizes.map((size) => (
//           <option key={size.sku} value={size.qauntity}>{size.quantity}</option>
//         ))}
//       </select>
//       {/* <select onChange={handleQuantityChange} value={selectedQuantity} disabled={!selectedSize}>
//         {Array.from({ length: Math.min(
//           15, selectedStyleSkus[selectedSize]?.quantity || 0),
//         }, (_, i) => (
//           <option key={i + 1} value={i + 1}>{i + 1}</option>
//         ))}
//       </select> */}

//       <button type="submit" onClick={() => console.log('Added to Cart: ', selectedSize, selectedQuantity)} disabled={!selectedSize || !availableSizes.length}>
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default AddToCart;
