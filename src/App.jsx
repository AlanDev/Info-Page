import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes as BrowserRouter,
  Link,
  Outlet,
  useLocation,
  
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './hooks/CartContext';

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Shop from './Pages/Shop';
import NoMatch from './Pages/NoMatch';
import Cart from './Pages/Cart';


function App() {

  

  
  return (
    <div>
            <CartProvider>

      <Router>
        <BrowserRouter>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="Cart" element={<Cart/>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </BrowserRouter>
      </Router>
      </CartProvider>

    </div>
  );
}

const Layout = ({ showNavbarAndFooter = true }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  if (isLoginPage || isRegisterPage) {
    return <div><Outlet /></div>;
  }

  return (
    <div>
      {showNavbarAndFooter && <Navbar />}
      <Outlet />
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};
















export default App
