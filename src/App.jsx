import React, { createContext, useState, useContext,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as BrowserRouter,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { CartProvider } from './hooks/CartContext';
import { AdminProvider } from './hooks/AdminContext';

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Shop from './Pages/Shop';
import NoMatch from './Pages/NoMatch';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';
import Details from './Pages/Details';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [productData, setProductData] = useState([]);


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const fetchProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=12');
    const data = await response.json();
    return data;
  };
  
  

  return (
    <div>
    <UserContext.Provider value={{ user, setUser }}>
      <CartProvider>
        <Router>
          <AdminProvider>
            <BrowserRouter>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Register" element={<Register />} />
                  <Route path="Shop" element={<Shop />} />
                  <Route path="/shop/details/:productId" element={<Details products={productData} />} />
                  <Route path="Cart" element={<Cart />} />
                  <Route path="Admin" element={<Admin />} />
                  <Route path="Dashboard" element={<Dashboard />} />
                  <Route path="*" element={<NoMatch />} />
                </Route>
            </BrowserRouter>
          </AdminProvider>
        </Router>
      </CartProvider>
    </UserContext.Provider>
  </div>
  );
}

const Layout = ({ showNavbarAndFooter = true }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isAdminPage = location.pathname === '/admin';
  const isDashboardPage = location.pathname === '/dashboard';

  if (isLoginPage || isRegisterPage || isAdminPage || isDashboardPage) {
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

export default App;
