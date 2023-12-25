import React from 'react';
import Filter from '../components/Filter';
import Products from '../components/Products';
import useProductsData from '../hooks/Api';
import Pagination from '../components/Pagination';

function Shop() {
  const { products, info, error, isLoading, onNext, onPrevious } = useProductsData();

  if (isLoading) {
    return (
      <p className="text-center mt-72 text-4xl font-bold text-[#212121]  ">
        Loading products
      </p>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-center mt-72 text-4xl font-bold text-[#212121] ">
          An error has occurred
        </p>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Filter />
    </div>
  );
}

export default Shop;
