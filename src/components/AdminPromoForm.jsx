import { useState } from 'react';
import { useData } from '../context/DataContext';

const AdminPromoForm = () => {
  const { addPromo } = useData();
  const [promoText, setPromoText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!promoText.trim()) {
      alert('Please enter promo text');
      return;
    }
    
    addPromo({
      text: promoText,
    });
    
    setPromoText('');
  };
  
  return (
    <div className="admin-form">
      <h2 className="admin-form-title">Add New Promotion</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="promoText" className="form-label">Promotion Text *</label>
          <input
            type="text"
            id="promoText"
            className="form-input"
            placeholder="Enter promotion text"
            value={promoText}
            onChange={(e) => setPromoText(e.target.value)}
            required
          />
        </div>
        
        <div className="admin-actions">
          <button type="submit" className="btn btn-primary">Add Promotion</button>
        </div>
      </form>
    </div>
  );
};

export default AdminPromoForm;