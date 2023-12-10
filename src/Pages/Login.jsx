import React from 'react'
import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';



const Login = () => {

  const backgroundStyle = {
    backgroundImage: "url('https://i.pinimg.com/564x/1d/f7/13/1df713bb8f333d47761219ca084fe3a1.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="min-h-screen bg-[#ffffff] grid grid-cols-1 lg:grid-cols-2">
      <div className="text-[#111111] flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
          <img src="https://static.vecteezy.com/system/resources/previews/000/593/536/original/ornamental-gold-crown-logo-template-illustration-design-vector-eps-10.jpg" alt="" className='mx-auto sm:w-72 sm:h-72 sm:block hidden' />
          <Link to="/" className='mb-8 flex'><IconArrowLeft />
            Go to Home</Link>
          <h1 className="text-4xl font-medium">Sign in</h1>
          <p className="text-[#111111]">
            Log in with your credentials      </p>
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
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-[#111111]">
              Email *
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-[#FFCB74]"
              placeholder="Enter your email"
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
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#FFCB74] hover:text-[#2f2f2f] transition-colors"
              >
                Register
              </Link>
            </span>
            <Link
              href="#"
              className="text-[#111111] hover:text-gray-200 transition-colors"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="mt-4 order-1 md:order-2">
            <button
              type="submit"
              className="w-full bg-[#FFCB74] p-2 rounded-full  hover:bg-black hover:text-[#FFCB74] duration-500"
            >
              Forgot your password?
             </button>
          </div>
        </form>
      </div>
      <div style={backgroundStyle} className="hidden lg:block"></div>

    </div>
  )
}

export default Login