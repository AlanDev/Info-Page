
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addProductToCart = (product) => {
    setSelectedProducts((prevProducts) => [...prevProducts, { ...product, quantity: 1 }]);
    incrementCount();
    console.log("Selected Products:", selectedProducts); 

  };

  const resetCart = () => {
    setSelectedProducts([]);
    setCount(0);
  };

  return (
    <CartContext.Provider value={{ count, incrementCount, selectedProducts, addProductToCart , resetCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
