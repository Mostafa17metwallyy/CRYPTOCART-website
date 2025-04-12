import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>
                {item.price} x {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <button className="checkout-btn">Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
