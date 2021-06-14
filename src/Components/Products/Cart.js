import React, { useState, useEffect } from "react";

const cart = [];
const cartTotal = 0;

const Shop = () => {
    const [cartt,setCartt] = useState([]);
  
  
  
  

  const addToCart = (el) => {
      cart.push(el);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    cart = hardCopy;
  };

  

  

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div>
      STORE
      
      <div>CART</div>
      <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
    </div>
  );
};

export default Shop;
export {cart,cartTotal};