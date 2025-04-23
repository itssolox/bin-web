import { createContext, useState, useContext } from 'react';
import { admins } from '../data/data';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const login = (username, password) => {
    const admin = admins.find(
      admin => admin.username === username && admin.password === password
    );
    
    if (admin) {
      setIsAuthenticated(true);
      setUser(username);
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};