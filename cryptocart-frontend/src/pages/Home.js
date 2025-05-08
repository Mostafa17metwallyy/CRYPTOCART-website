import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import '../styles/Home.css';
import HowItWorks from '../components/HowItWorks';
import ethereumLogo from '../assets/eth-logo.png';

const Home = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Buy Anything<br />with <span className="highlight">Ethereum</span></h1>
          <p>Shop for goods and services seamlessly using Ethereum payments.</p>
          <button className="explore-btn" onClick={() => navigate('/products')}>
            Explore Products
          </button>
        </div>
        <div className="hero-image">
          <img src={ethereumLogo} alt="Ethereum" />
        </div>
      </div>

      <div className="how-it-works">
        <HowItWorks />
      </div>
    </div>
  );
};

export default Home;
