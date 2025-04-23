import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Admin.css';

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    const success = login(username, password);
    
    if (!success) {
      setError('Invalid username or password');
    }
  };
  
  return (
    <div 
      className="login-container"
      data-aos="fade-up"
    >
      <h1 
        className="login-title"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Admin Login
      </h1>
      
      <form 
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="btn btn-primary login-button">Login</button>
      </form>
      
      <div 
        className="text-center mt-md" 
        style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary-light)' }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p>Default login: admin / admin123</p>
      </div>
    </div>
  );
};

export default Login;