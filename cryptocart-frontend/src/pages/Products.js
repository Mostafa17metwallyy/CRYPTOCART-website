import React, { useEffect, useState } from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p className="rating">⭐ {product.rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
