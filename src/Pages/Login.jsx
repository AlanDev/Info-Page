import React ,{ useEffect }  from 'react'
import { Link } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../App';
import { useContext } from 'react';




const Login = () => {

  const navigate = useNavigate(); 
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.success) {
          setUser({ name: result.data.userName });
  
          localStorage.setItem('user', JSON.stringify({ name: result.data.userName }));
  
          navigate('/');
        } else {
          alert(result.data.message);
        }
      })
      .catch(err => {
        console.log(err);
        alert('An error occurred. Please try again later.');
      });
  };



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
       
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}

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
              Sign in
             </button>
          </div>
        </form>
      </div>
      <div style={backgroundStyle} className="hidden lg:block"></div>

    </div>
  )
}

export default Login