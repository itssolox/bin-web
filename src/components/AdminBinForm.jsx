import { useState } from 'react';
import { useData } from '../context/DataContext';

const AdminBinForm = () => {
  const { addBin } = useData();
  const [formData, setFormData] = useState({
    bin: '',
    country: '',
    ip: '',
    address: '',
    image: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form
    if (!formData.bin || !formData.country || !formData.ip || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Add the new bin
    addBin({
      ...formData,
      image: formData.image || 'https://via.placeholder.com/150x80/0984e3/FFFFFF?text=CARD'
    });
    
    // Reset the form
    setFormData({
      bin: '',
      country: '',
      ip: '',
      address: '',
      image: ''
    });
  };
  
  return (
    <div className="admin-form">
      <h2 className="admin-form-title">Add New BIN</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bin" className="form-label">BIN Number *</label>
          <input
            type="text"
            id="bin"
            name="bin"
            className="form-input"
            placeholder="Enter BIN number"
            value={formData.bin}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="country" className="form-label">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            className="form-input"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="ip" className="form-label">IP Address *</label>
          <input
            type="text"
            id="ip"
            name="ip"
            className="form-input"
            placeholder="Enter IP address"
            value={formData.ip}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label">Physical Address *</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-input"
            placeholder="Enter physical address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-input"
            placeholder="Enter image URL (optional)"
            value={formData.image}
            onChange={handleChange}
          />
          <small style={{ color: 'var(--text-secondary-light)', fontSize: 'var(--font-xs)' }}>
            Leave empty to use default image
          </small>
        </div>
        
        <div className="admin-actions">
          <button type="submit" className="btn btn-primary">Add BIN</button>
        </div>
      </form>
    </div>
  );
};

export default AdminBinForm;