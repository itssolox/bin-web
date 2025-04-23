import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AdminBinForm from '../components/AdminBinForm';
import AdminBinList from '../components/AdminBinList';
import AdminPromoForm from '../components/AdminPromoForm';
import AdminPromoList from '../components/AdminPromoList';
import '../styles/Admin.css';

const Admin = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('bins');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Admin Panel</h1>
        <p className="admin-subtitle">Manage your BINs and promotions</p>
      </div>
      
      <div className="admin-tabs">
        <button 
          className={`admin-tab ${activeTab === 'bins' ? 'active' : ''}`}
          onClick={() => setActiveTab('bins')}
        >
          Manage BINs
        </button>
        
        <button 
          className={`admin-tab ${activeTab === 'promos' ? 'active' : ''}`}
          onClick={() => setActiveTab('promos')}
        >
          Manage Promotions
        </button>
      </div>
      
      {activeTab === 'bins' && (
        <div className="tab-content">
          <AdminBinForm />
          <AdminBinList />
        </div>
      )}
      
      {activeTab === 'promos' && (
        <div className="tab-content">
          <AdminPromoForm />
          <AdminPromoList />
        </div>
      )}
    </div>
  );
};

export default Admin;