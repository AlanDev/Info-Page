import React from 'react';
import { useState } from 'react';

import { CartProvider, useCart } from '../hooks/CartContext';



const Products = ({ products = []  }) => {

  const { incrementCount } = useCart();

  const { addProductToCart } = useCart();

  const handleAddToCart = () => {
    addProductToCart(products);
  };

  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                    <img
                      src={product.images}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      alt={product.title}
                    />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className='mx-auto flex'>
                    <h3 className=" text-[#212121] text-base font-semibold">
                      <p>
                        <span aria-hidden="true" className=" inset-0" />
                        {product.title}
                      </p>
                    </h3>
                  </div>
                </div>
                <div className='text-center'>
                  <p className=" text-lg font-semibold text-gray-900 ">${product.price}</p>
                  <button
                    className='bg-[#101110] text-[#fefeff] rounded py-2 px-[88px] hover:text-[#595958]'
                    onClick={incrementCount && handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  </div>
                  
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;