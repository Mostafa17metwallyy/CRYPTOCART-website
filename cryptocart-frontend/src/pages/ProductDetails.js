import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';

const dummyProduct = {
  id: 1,
  name: 'Drop Type Cushion Chair',
  image: '/assets/laptop.png',
  description: 'Premium & comfortable memory foam with teakwood structure.',
  price: '0.25 ETH',
  size: '52"',
  width: '43"',
};

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  return (
    <div className="product-details">
      <div className="product-img">
        <img src={dummyProduct.image} alt={dummyProduct.name} />
      </div>

      <div className="product-info">
        <h2>{dummyProduct.name}</h2>
        <p>{dummyProduct.description}</p>
        <p><strong>Size:</strong> {dummyProduct.size} | <strong>Width:</strong> {dummyProduct.width}</p>
        <h3>{dummyProduct.price}</h3>

        <div className="action">
          <button className="add" onClick={() => addToCart(dummyProduct)}>Add to Cart</button>
          <button className="buy">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
