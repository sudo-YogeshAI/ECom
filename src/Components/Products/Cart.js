import React, { useState, useEffect } from "react";

const cart = [];



const Shop = () => {

  const [cartTotal,setCartTotal] = useState(0);


  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    console.log("here");
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      var string = cart[i].cost.split(" ")
      var cost = parseInt(string[1]);
      totalVal += cart[i].quantity*cost;
    }
    setCartTotal(totalVal);
  };
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
      {`${el.name}: ${el.cost}`}
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
export {cart};