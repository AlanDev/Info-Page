import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addProductToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, product]);
    incrementCount();
  };

  return (
    <CartContext.Provider value={{ count, incrementCount, selectedProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
