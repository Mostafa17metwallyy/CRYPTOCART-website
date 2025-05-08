import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        }
      } catch (error) {
        console.error("User rejected connection:", error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem("walletAddress");
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        } else {
          disconnectWallet(); // clear state if MetaMask isn't connected
        }
      }
    };
    checkConnection();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🛒 CRYPTOCART</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout">Checkout</Link>

        {walletAddress ? (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="wallet-btn">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </button>
            <button className="wallet-btn" onClick={disconnectWallet}>Disconnect</button>
          </div>
        ) : (
          <button className="wallet-btn" onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
