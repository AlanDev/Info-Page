import React, { useState } from "react";
import { ShoppingBagIcon} from '@heroicons/react/24/outline'
import { AdminContext} from '../../hooks/AdminContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";


// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";

import { Link } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate(); 

  const [showMenu, setShowMenu] = useState(false);
  const { isAdminAuthenticated, loginAdmin, logoutAdmin } = useContext(AdminContext)

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('Admin');
    logoutAdmin();
    navigate('/');
  };

  return (
    <>
      <div
        className={`bg-black h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://clipart-library.com/images_k/gold-crown-transparent-background/gold-crown-transparent-background-22.png"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300 bg-white"
          />
          <h1 className="text-xl text-gray-300 font-bold">Alan Quenardelle</h1>
          <p className="bg-gray-900 py-2 px-4 rounded-full text-[#FFCB74]">
            Admin
          </p>
        </div>
        {/* Nav */}
        <div className="bg-gray-900 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <Link
              to="/"
              className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Home
            </Link>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <ShoppingBagIcon className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
              Products
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Invoices
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-gray-300 py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine /> Reports
            </a>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <button 
            onClick={handleLogout}
            className="text-gray-300 rounded px-8 py-2 border inline-flex hover:text-gray-700">Logout</button>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-black z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;