import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ For navigation

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleBuyNow = () => {
    addToCart(product);       // ✅ Add product to cart
    navigate('/checkout');    // ✅ Navigate to checkout
  };

  return (
    <div className="product-details">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Size:</strong> {product.size} | <strong>Width:</strong> {product.width}</p>
        <h3>{product.price}</h3>

        <div className="action">
          <button className="add" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="buy" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
