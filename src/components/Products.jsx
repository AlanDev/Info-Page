// Products.jsx
import React from 'react';

const Products = ({ products = [] }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                {product.images ? (
                  <img
                    src={product.images}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    alt={product.title}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-300 text-gray-600">
                    Image Not Available
                  </div>
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <div className='mx-auto flex'>
                  <h3 className=" text-[#212121] text-sm font-semibold">
                    <a href="" >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
              </div>
                <p className="text-sm font-semibold text-gray-900 text-center">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
