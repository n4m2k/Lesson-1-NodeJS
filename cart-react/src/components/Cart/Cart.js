import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  return <a className="cart">Cart:{cart.length}</a>;
};

export default Cart;
