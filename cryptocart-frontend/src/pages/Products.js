import React from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Modern Chair',
    image: '/assets/laptop.png',
    price: '0.12 ETH',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Desk Lamp',
    image: '/assets/laptop.png',
    price: '0.05 ETH',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Desk Lamp',
    image: '/assets/laptop.png',
    price: '0.05 ETH',
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Desk Lamp',
    image: '/assets/laptop.png',
    price: '0.05 ETH',
    rating: 4.7,
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
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
