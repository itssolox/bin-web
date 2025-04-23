import { FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { useData } from '../context/DataContext';

const AdminPromoList = () => {
  const { allPromos, togglePromoStatus, deletePromo } = useData();
  
  if (allPromos.length === 0) {
    return (
      <div className="text-center" style={{ color: 'var(--text-secondary-light)', padding: 'var(--space-lg)' }}>
        No promotions added yet. Use the form above to add promotions.
      </div>
    );
  }
  
  return (
    <div className="admin-list">
      <h2 className="admin-form-title">Manage Promotions</h2>
      
      {allPromos.map((promo) => (
        <div key={promo.id} className="admin-promo-item">
          <div className="admin-promo-text">
            <span 
              className={`admin-promo-status ${promo.active ? 'active' : 'inactive'}`}
              title={promo.active ? 'Active' : 'Inactive'}
            ></span>
            {promo.text}
          </div>
          
          <div className="admin-promo-controls">
            <button 
              className="btn"
              onClick={() => togglePromoStatus(promo.id)}
              title={promo.active ? 'Deactivate' : 'Activate'}
              style={{ 
                color: promo.active ? 'var(--success-color)' : 'var(--text-secondary-light)',
                background: 'none',
                padding: 'var(--space-xs)'
              }}
            >
              {promo.active ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
            </button>
            
            <button 
              className="btn btn-accent"
              onClick={() => deletePromo(promo.id)}
              title="Delete Promotion"
              style={{ padding: 'var(--space-xs)' }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPromoList;