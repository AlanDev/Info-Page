// useProductsData.jsx
import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  products: [],
  info: {},
  error: '',
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'VALIDO':
  return {
    ...state,
    isLoading: false,
    error: '',
    products: action.payload, // Update this line
    info: { ...state.info, ...action.payload.info }, // Actualiza esta línea
  };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const useProductsData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, info, error, isLoading } = state;

  const url = ' https://api.escuelajs.co/api/v1/products?offset=0&limit=12';

  const fetchProducts = (url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error en la base de datos');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'VALIDO', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', payload: err.message });
      });
  };

  useEffect(() => {
    fetchProducts(url);
  }, [fetchProducts]);

  useEffect(() => {

  }, []);

  const onPrevious = () => {
    if (info?.prev) {
      fetchProducts(info.prev);
    }
  };

  const onNext = () => {
    if (info?.next) {
      fetchProducts(info.next);
    }
  };

  return { products, info, error, isLoading, onNext, onPrevious };
};

export default useProductsData;
