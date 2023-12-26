
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import { AdminContext, useAdminContext } from '../hooks/AdminContext';
import { Navigate } from 'react-router-dom';


const ProductCreation = () => {
  const navigate = useNavigate();
  const [productTitle, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const { isAdminAuthenticated } = useAdminContext();
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin" />;
  }

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', productTitle);
      formData.append('price', productPrice);
      formData.append('description', productDescription);
      formData.append('images', productImage);

      const response = await axios.post('https://api.escuelajs.co/api/v1/products', formData);

      if (response.data.message === 'Product created successfully') {
        alert('Product created successfully');
      } else {
        alert('Failed to create product. Please check the input data.');
      }
    } catch (error) {
      console.error('Axios error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="p-8">
      <Link to="/dashboard" className="mb-8 flex items-center">
        <IconArrowLeft className="h-4 w-4 mr-2" />
        Go to Dashboard
      </Link>

      <form onSubmit={handleProductSubmit} className="space-y-12">
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            {productImage ? (
              <img src={productImage} alt="Product Preview" className="max-h-40 mx-auto" />
            ) : (
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-gray-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      onChange={handleImageChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-3">
          <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              value={productTitle}
              onChange={(e) => setProductName(e.target.value)}
              required
              type="text"
              name="Name"
              id="Name"
              autoComplete="given-name"
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-3">
          <label htmlFor="Price" className="block text-sm font-medium leading-6 text-gray-900">
            Price $
          </label>
          <div className="mt-2">
            <input
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
              type="number"
              name="Price"
              id="Price"
              autoComplete="family-name"
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
            Description
          </label>
          <div className="mt-2">
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
              id="description"
              name="description"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your product.</p>
        </div>


        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => {
              navigate('/dashboard');
            }}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default ProductCreation;
