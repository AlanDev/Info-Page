import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [selectedProducts, setSelectedProducts] = useState(storedCart);
  const [count, setCount] = useState(storedCart.length);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addProductToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    incrementCount();
  };

  // Update local storage whenever selectedProducts changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  return (
    <CartContext.Provider value={{ count, incrementCount, selectedProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
