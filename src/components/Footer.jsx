import React from 'react'
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTwitter } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconDeviceMobile } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white w-full p-8">
      <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
        <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Chic Couronne</h1>
          <p className="text-gray-600 text-justify">
            Welcome to Chic Couronne, the ultimate destination for fashion lovers looking for the perfect combination of style, quality and elegance. Immerse yourself in a world of fashion where every garment tells a story of sophistication and originality.
          </p>
        </div>
        <div className="md:col-span-4 xl:col-span-2">
          <h2 className="font-bold mb-6 uppercase">Menu</h2>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Social Medias</h2>
          <nav>
            <a
              href="https://www.facebook.com/"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              target="_blank"
            >
              <IconBrandFacebook />
              -
            </a>
            <a
              href="https://www.instagram.com/"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              target="_blank"
            >
              <IconBrandInstagram />
              -

            </a>
            <a
              href="https://twitter.com/"
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
              target="_blank"
            >
              <IconBrandTwitter />
              -
            </a>
          </nav>
        </div>
        <div className="md:col-span-4 xl:col-span-3">
          <h2 className="font-bold mb-6 uppercase">Contact</h2>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2">
            <IconMapPin/>
              Chaco , Argentina
            </p>
            <p className="flex items-center gap-2">
              <IconMail/>
              alanqienar@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <IconDeviceMobile/>
              (+54) 3624 xx xxxx
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
        <p className="text-gray-800 text-center md:text-left">
          &copy; 2022
          <span className="text-gray-900 font-bold"> Alan Quenardelle.</span> All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Terms and Conditions
          </a>
          <span className="hidden md:flex">|</span>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer