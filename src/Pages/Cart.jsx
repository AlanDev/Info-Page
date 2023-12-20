import React, { useContext } from 'react';
import { useCart } from '../hooks/CartContext';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
  const { selectedProducts } = useCart();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      navigate('/cart');
    }
  }, [user, navigate]);

  return (
    <div className="bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-4xl font-bold text-[#101110]">Shopping Cart</h1>

      {!user ? (
        <main class="grid place-items-center  px-6  sm:py-32 lg:px-8">
        <div class="text-center">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Too fast!</h1>
          <p class="mt-6 text-base leading-7 text-gray-600">To view the list, you must log in or register</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/login" 
            class="rounded-md bg-[#101110] px-3.5 py-2.5 text-sm font-semibold text-[#FFCB74] shadow-sm hover:bg-[#FFCB74] hover:text-[#101110] duration-500 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</Link>
            <Link to="/register" class="text-sm font-semibold text-gray-900">Register <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </main>
      ) : (
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {selectedProducts.map((product) => (
              <div
                key={product.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img src={product.images} alt={product.title} className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                    <p className="mt-1 text-xs text-gray-700">{product.description}</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#101110] hover:text-blue-50"> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" readOnly />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-[#101110] hover:text-blue-50"> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">Price: ${product.price}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 mb-24">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              {/* Lógica para calcular el subtotal */}
              <p className="text-gray-700">${calculateSubtotal(selectedProducts)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${calculateTotal(selectedProducts)}</p>
                <p className="text-sm text-gray-700">TAX</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md py-1.5 font-medium inline-block border border-transparent duration-500 bg-[#FFCB74] px-8 text-center text-[#111111] hover:bg-[#111111] hover:text-[#FFCB74]">Check out</button>
          </div>
        </div>
      )}
    </div>
  );
};

const calculateSubtotal = (products) => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
};

const calculateTotal = (products) => {
  const subtotal = calculateSubtotal(products);
  const shippingCost = 4.99;
  return (parseFloat(subtotal) + shippingCost).toFixed(2);
};

export default ShoppingCart;
