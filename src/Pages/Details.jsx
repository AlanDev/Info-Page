import React from 'react';
import { useCart } from '../hooks/CartContext';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Details = ({ products = [] }) => {
  const { addProductToCart, selectedProducts } = useCart();
  const { productId } = useParams();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addProductToCart(selectedProduct);
  };
  
  useEffect(() => {
    console.log("Updated Selected Products:", selectedProducts);
  }, [selectedProducts]);
  

  const selectedProduct = products.find((product) => product.id === Number(productId));
  console.log("selectedProduct:", selectedProduct);
  console.log("selectedProduct title:", selectedProduct && selectedProduct.title);

  return (
    
    <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">


          <Link to="/shop">
          <li>
            <div className="flex items-center">
            {selectedProduct &&<a href="#" className="mr-2 text-sm font-medium text-gray-900">{selectedProduct.category.name}</a>}
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          </Link>
  
          <li className="text-sm">
          {selectedProduct && <a href="#" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{selectedProduct.title}</a>}
          </li>
        </ol>
      </nav>

        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          {selectedProduct &&<img
              src={selectedProduct.images}
              alt={selectedProduct.title}
              className="h-full w-full object-cover object-center"
            />}
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          {selectedProduct &&<h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{selectedProduct.title}</h1>}
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            {selectedProduct &&<p className="text-3xl tracking-tight text-gray-900">${selectedProduct.price}</p>}

            <form className="mt-10">
              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
              {selectedProduct &&<p className="text-base text-gray-900">{selectedProduct.description}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
