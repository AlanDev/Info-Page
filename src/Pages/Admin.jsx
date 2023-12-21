import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAdminContext } from '../hooks/AdminContext';

import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const navigate = useNavigate();
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  
  const { loginAdmin } = useAdminContext();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí deberías hacer la solicitud al backend para autenticar al administrador
    try {
      // Simulando una solicitud al servidor
      const response = await axios.post('http://localhost:3001/admin', {
        adminEmail , adminPassword
      });

      if (response.data.message === 'Success') {
        loginAdmin();
        navigate('/dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Axios error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img className="mx-auto h-18 w-24" src="https://static.vecteezy.com/system/resources/previews/000/593/536/original/ornamental-gold-crown-logo-template-illustration-design-vector-eps-10.jpg" alt="Your Company" />
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[#101110]">Sign in to your Admin Dashboard</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" id='adminLoginForm' onSubmit={handleSubmit} >
          <div>
            <label htmlFor="adminEmail" className="block text-sm font-medium leading-6 text-[#101110]">Email address</label>
            <div className="mt-2">
              <input
                onChange={(e) => setAdminEmail(e.target.value)}

                id="adminEmail"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="adminPassword" className="block text-sm font-medium leading-6 text-[#101110]">Password</label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setAdminPassword(e.target.value)}
                id="adminPassword"
                name="password"
                type="password"
                autoComplete="current-password"
                required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#212121] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin