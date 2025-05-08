import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { payWithETH } from '../utils/ethFunctions';
import axios from 'axios';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [walletAddress, setWalletAddress] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(' ETH', ''));
        return total + price * item.quantity;
      }, 0)
      .toFixed(3);
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
      setWalletAddress(savedAddress);
      setWalletConnected(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    const total = getTotalPrice();

    // Prepare purchase record
    const purchaseData = {
      items: cart,
      total: `${total} ETH`,
      walletAddress,
      shippingAddress,
      status: "failed", // default unless payment succeeds
    };

    // Try to process payment
    try {
      const { success, error } = await payWithETH(total);

      if (success) {
        purchaseData.status = "done";
        setMessage("✅ Payment Successful! Order confirmed.");
      } else {
        setMessage(`❌ Payment Failed: ${error}`);
      }
    } catch (error) {
      setMessage("❌ Payment Error: " + error.message);
    }

    // Always log the purchase attempt
    try {
      await axios.post("http://localhost:5000/api/purchase", purchaseData);
    } catch (err) {
      console.error("❌ Failed to save purchase:", err);
    }

    setLoading(false);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <div className="checkout-total">
              <strong>Total:</strong> {getTotalPrice()} ETH
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Wallet Address</label>
              <input
                type="text"
                placeholder="0x123..."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                disabled={walletConnected}
              />
            </div>

            <div className="form-group">
              <label>Shipping Address</label>
              <input
                type="text"
                placeholder="123 Crypto Lane, Metaverse"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Pay with ETH"}
            </button>
          </form>

          {message && <p className="checkout-message">{message}</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
