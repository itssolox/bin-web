import { useState } from 'react';
import BinCard from './BinCard';
import '../styles/BinPreview.css';

const BinPreview = ({ bin }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bin-preview" data-aos="fade-up">
      {!showDetails ? (
        <div className="bin-preview-card" onClick={() => setShowDetails(true)}>
          <img 
            src={bin.image} 
            alt="Card Preview" 
            className="bin-preview-image"
          />
          <button className="bin-preview-button">
            Click for BIN Details
          </button>
        </div>
      ) : (
        <div className="bin-details-modal">
          <button 
            className="close-button"
            onClick={() => setShowDetails(false)}
          >
            ×
          </button>
          <BinCard bin={bin} />
        </div>
      )}
    </div>
  );
};

export default BinPreview;
