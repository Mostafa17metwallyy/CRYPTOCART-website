import React from 'react';
import '../styles/Home.css';
import HowItWorks from '../components/HowItWorks';
import ethereumLogo from '../assets/eth-logo.png'; // download this or replace with your own

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>Buy Anything<br />with <span className="highlight">Ethereum</span></h1>
          <p>Shop for goods and services seamlessly using Ethereum payments.</p>
          <button className="explore-btn">Explore Products</button>
        </div>
        <div className="hero-image">
          <img src={ethereumLogo} alt="Ethereum" />
        </div>
      </div>

      <HowItWorks />
    </div>
  );
};

export default Home;
