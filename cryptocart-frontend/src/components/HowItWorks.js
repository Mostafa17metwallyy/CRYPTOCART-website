import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-section">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">👛</div>
          <p><strong>1. Connect your wallet</strong><br />Link your Ethereum wallet to get started.</p>
        </div>
        <div className="step">
          <div className="icon">🛍️</div>
          <p><strong>2. Browse products</strong><br />Discover a variety of items available for purchase.</p>
        </div>
        <div className="step">
          <div className="icon">💸</div>
          <p><strong>3. Pay with ETH</strong><br />Complete your purchase using Ethereum.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
