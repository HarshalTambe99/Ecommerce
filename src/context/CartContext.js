import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);  // Log to check if it's being called
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalPrice((prevTotal) => prevTotal + product.price);
  };
  

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    const removedItem = cartItems.find(item => item.id === id);
    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice - removedItem.price);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
