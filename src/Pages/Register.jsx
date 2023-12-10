import React from 'react'
import { IconArrowLeft } from '@tabler/icons-react';


import { Link } from 'react-router-dom';



const Register = () => {

  const backgroundStyle = {
    backgroundImage: "url('https://i.pinimg.com/564x/74/e9/f3/74e9f3144e8a2e50f49b7c4521c75351.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (

    <div className="min-h-screen bg-[#ffffff] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-[#111111] flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <img src="https://static.vecteezy.com/system/resources/previews/000/593/536/original/ornamental-gold-crown-logo-template-illustration-design-vector-eps-10.jpg"alt=""className='mx-auto sm:w-72 sm:h-72 sm:block hidden' />
          <Link to="/" className='mb-8 flex'><IconArrowLeft />
            Go to Home</Link>
          <h1 className="text-4xl font-medium">Create an account</h1>
          <p className="text-[#111111]">Register in the platform</p>
        </div>
        <div className="w-full">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border p-2 px-4 rounded-full "
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              width="20"
              height="20"
            />
            <span className="ml-2 ">Registrate with Google</span>
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-[#111111]">
              Name *
            </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-[#FFCB74]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[#111111]">
              Email address *
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-[#FFCB74]"
              placeholder="Enter your Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-[#111111]">
              Password *
            </label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-[#FFCB74]"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
            <span className="text-[#111111]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#FFCB74] hover:text-[#2f2f2f] transition-colors"
              >
                Login
              </Link>
            </span>
            <a
              href="#"
              className="text-[#111111] hover:text-gray-200 transition-colors"
            >
              Forgot your password?
            </a>
          </div>
          <div className="mt-4 order-1 md:order-2">
            <button
              type="submit"
              className="w-full bg-[#FFCB74] p-2 rounded-full hover:text-[#FFCB74] hover:bg-[#111111] duration-500"
            >
              Create your account
            </button>
          </div>
        </form>
      </div>
      <div style={backgroundStyle} className="hidden lg:block"></div>
    </div>
  )
}

export default Register