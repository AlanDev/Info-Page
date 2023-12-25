import React, { useEffect } from 'react'
import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';
import { useContext } from 'react';




const Register = () => {
  
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: "url('https://i.pinimg.com/564x/74/e9/f3/74e9f3144e8a2e50f49b7c4521c75351.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationError, setRegistrationError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name || name.length < 4) {
      setNameError("Name should be at least 4 characters");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!password || password.length < 5) {
      setPasswordError("Password should be at least 5 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) {
      setRegistrationError("Please check the errors in the form.");
      return;
    } else {
      setRegistrationError("");
    }

    try {
      const result = await axios.post('http://localhost:3001/register', { name, email, password });

      handleRegistration(result.data);

      console.log(result);
      navigate('/');
    } catch (err) {
      console.log(err);
      setRegistrationError("An error occurred. Please try again later.");
    }
  };

  const handleRegistration = (userData) => {
    setUser(userData);
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
        
        <form className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        >
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
              onChange={(e)=>setName(e.target.value)}
            />
                {nameError && <div className="text-red-500 mt-2">{nameError}</div>}

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
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-[#111111]">
              Password *
            </label>
            <input
              min={5}
              type="password"
              id="password"
              autoComplete="off"
              className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-[#FFCB74]"
              placeholder="Enter your password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            {passwordError && <div className="text-red-500 mt-2">{passwordError}</div>}

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