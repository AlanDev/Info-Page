// AdminContext.js
import { createContext, useContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdminAuthenticated, setAdminAuthenticated] = useState(false);

  const loginAdmin = () => {
    setAdminAuthenticated(true);
  };

  const logoutAdmin = () => {
    setAdminAuthenticated(false);
  };

  return (
    <AdminContext.Provider value={{ isAdminAuthenticated, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
