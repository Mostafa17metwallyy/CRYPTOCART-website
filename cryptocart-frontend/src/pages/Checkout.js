import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(' ETH', ''));
      return total + price * item.quantity;
    }, 0).toFixed(2);
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
            {cart.map(item => (
              <div key={item.id} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <div className="checkout-total">
              <strong>Total:</strong> {getTotalPrice()} ETH
            </div>
          </div>

          <form className="checkout-form">
            <div className="form-group">
              <label>Wallet Address</label>
              <input type="text" placeholder="0x123..." />
            </div>

            <div className="form-group">
              <label>Shipping Address</label>
              <input type="text" placeholder="123 Crypto Lane, Metaverse" />
            </div>

            <button type="submit">Pay with ETH</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
