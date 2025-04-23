import { FaTrash } from 'react-icons/fa';
import { useData } from '../context/DataContext';

const AdminBinList = () => {
  const { bins, deleteBin } = useData();
  
  if (bins.length === 0) {
    return (
      <div className="text-center" style={{ color: 'var(--text-secondary-light)', padding: 'var(--space-lg)' }}>
        No BINs added yet. Use the form above to add bins.
      </div>
    );
  }
  
  return (
    <div className="admin-list">
      <h2 className="admin-form-title">Manage BINs</h2>
      
      {bins.map((bin) => (
        <div key={bin.id} className="admin-item">
          <div className="admin-item-info">
            <div className="admin-item-title">{bin.bin}</div>
            <div className="admin-item-subtitle">{bin.country} | {bin.ip}</div>
          </div>
          
          <div className="admin-item-controls">
            <button 
              className="btn btn-accent"
              onClick={() => deleteBin(bin.id)}
              title="Delete BIN"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminBinList;