import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaTelegram } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Daily b!ns by @Glllaxy
        </Link>
        
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            Home
          </NavLink>
          
          <a 
            href="https://t.me/dailyb1ns" 
            className="navbar-link"
            target="_blank" 
            rel="noopener"
          >
            <FaTelegram style={{ marginRight: '4px' }} />
            Telegram Channel
          </a>

          <a 
            href="https://daily-cc-generator.netlify.app/" 
            className="navbar-link"
            target="_blank" 
            rel="noopener"
          >
            CC Generator
          </a>
          
          <NavLink 
            to="/support" 
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            Support
          </NavLink>
          
          {isAuthenticated ? (
            <>
              <NavLink 
                to="/admin" 
                className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              >
                Admin Panel
              </NavLink>
              
              <button onClick={logout} className="navbar-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Logout
              </button>
            </>
          ) : (
            <NavLink 
              to="/login" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Login
            </NavLink>
          )}
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-links">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            
            <a 
              href="https://t.me/dailyb1ns" 
              className="navbar-link"
              target="_blank" 
              rel="noopener"
              onClick={closeMenu}
            >
              <FaTelegram style={{ marginRight: '4px' }} />
              Telegram Channel
            </a>

            <a 
              href="https://daily-cc-generator.netlify.app/" 
              className="navbar-link"
              target="_blank" 
              rel="noopener"
              onClick={closeMenu}
            >
              CC Generator
            </a>
            
            <NavLink 
              to="/support" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              onClick={closeMenu}
            >
              Support
            </NavLink>
            
            {isAuthenticated ? (
              <>
                <NavLink 
                  to="/admin" 
                  className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
                  onClick={closeMenu}
                >
                  Admin Panel
                </NavLink>
                
                <button 
                  onClick={() => {
                    logout();
                    closeMenu();
                  }} 
                  className="navbar-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink 
                to="/login" 
                className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
                onClick={closeMenu}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar