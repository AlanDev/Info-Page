import React, { createContext, useState, useContext } from 'react';
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

import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import Shop from './Pages/Shop';
import NoMatch from './Pages/NoMatch';
import Cart from './Pages/Cart';
import Admin from './Pages/Admin';
import Dashboard from './Pages/Dashboard';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);



  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <CartProvider>
          <AuthProvider>
            <Router>
              <BrowserRouter>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Register" element={<Register />} />
                  <Route path="Shop" element={<Shop />} />
                  <Route path="Cart" element={<Cart />} />

                  <Route path="Admin" element={<Admin />} />
                  <Route
                    path="Dashboard"
                    element={
                      <ProtectedRoute>
                        {/* Use the child route for Dashboard */}
                        <Route index element={<Dashboard />} />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="*" element={<NoMatch />} />
                </Route>
              </BrowserRouter>
            </Router>
          </AuthProvider>
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

function ProtectedRoute({ children }) {
  const { user } = useContext(UserContext);
  const currentLocation = useLocation();

  const isAdmin =
    user &&
    user.email ==='test@test.com' &&
    user.password ==='test123';

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: currentLocation }} replace />;
  } 
    return  children;
  
}

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);

  const value = {
    admin,
    setAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default App;
