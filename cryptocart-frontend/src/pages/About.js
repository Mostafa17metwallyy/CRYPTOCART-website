import React from 'react';
import '../styles/About.css';
import aboutImg from '../assets/about.png'; // Replace with your own image

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h2>About CryptoCart</h2>
          <p>
            CryptoCart is a modern e-commerce platform that allows users to shop
            for products and services using Ethereum. Our goal is to make crypto
            spending simple, secure, and seamless—no banks, no borders.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About CryptoCart" />
        </div>
      </div>
    </div>
  );
};

export default About;
