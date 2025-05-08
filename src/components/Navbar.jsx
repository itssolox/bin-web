import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaTelegram, FaTools, FaBook, FaCreditCard, FaGlobe, FaScroll } from 'react-icons/fa';
import { tools, websites } from '../data/data';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showWebsites, setShowWebsites] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowTools(false);
    setShowWebsites(false);
  };

  const handleToolClick = (tool) => {
    if (tool.component) {
      navigate('/image-generator');
    } else if (tool.url) {
      window.open(tool.url, '_blank');
    }
    closeMenu();
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
          
          <NavLink 
            to="/bins" 
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            <FaCreditCard style={{ marginRight: '4px' }} />
            Bins
          </NavLink>
          
          <NavLink 
            to="/methods" 
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            <FaBook style={{ marginRight: '4px' }} />
            Methods
          </NavLink>

          <NavLink 
            to="/scripts" 
            className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
          >
            <FaScroll style={{ marginRight: '4px' }} />
            Scripts
          </NavLink>
          
          <div 
            className="navbar-tools"
            onMouseEnter={() => setShowTools(true)}
            onMouseLeave={() => setShowTools(false)}
          >
            <button className="navbar-link tools-button">
              <FaTools style={{ marginRight: '4px' }} />
              Tools
            </button>
            
            {showTools && (
              <div className="tools-dropdown">
                {tools.map(tool => (
                  <button
                    key={tool.id}
                    className="tool-link"
                    onClick={() => handleToolClick(tool)}
                  >
                    {tool.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div 
            className="navbar-tools"
            onMouseEnter={() => setShowWebsites(true)}
            onMouseLeave={() => setShowWebsites(false)}
          >
            <button className="navbar-link tools-button">
              <FaGlobe style={{ marginRight: '4px' }} />
              Websites
            </button>
            
            {showWebsites && (
              <div className="tools-dropdown">
                {websites.map(site => (
                  <a
                    key={site.id}
                    href={site.url}
                    className="tool-link"
                    target="_blank"
                    rel="noopener"
                  >
                    {site.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a 
            href="https://t.me/dailyb1ns" 
            className="navbar-link"
            target="_blank" 
            rel="noopener"
          >
            <FaTelegram style={{ marginRight: '4px' }} />
            Telegram Channel
          </a>
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
            
            <NavLink 
              to="/bins" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              onClick={closeMenu}
            >
              <FaCreditCard style={{ marginRight: '4px' }} />
              Bins
            </NavLink>
            
            <NavLink 
              to="/methods" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              onClick={closeMenu}
            >
              <FaBook style={{ marginRight: '4px' }} />
              Methods
            </NavLink>

            <NavLink 
              to="/scripts" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              onClick={closeMenu}
            >
              <FaScroll style={{ marginRight: '4px' }} />
              Scripts
            </NavLink>
            
            <div className="mobile-tools">
              <div className="mobile-tools-header">Tools</div>
              {tools.map(tool => (
                <button
                  key={tool.id}
                  className="navbar-link"
                  onClick={() => handleToolClick(tool)}
                >
                  {tool.name}
                </button>
              ))}
            </div>

            <div className="mobile-tools">
              <div className="mobile-tools-header">Websites</div>
              {websites.map(site => (
                <a
                  key={site.id}
                  href={site.url}
                  className="navbar-link"
                  target="_blank"
                  rel="noopener"
                  onClick={closeMenu}
                >
                  {site.name}
                </a>
              ))}
            </div>
            
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
