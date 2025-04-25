import { useNavigate } from 'react-router-dom';
import '../styles/BinPreview.css';

const BinPreview = ({ bin }) => {
  const navigate = useNavigate();

  return (
    <div className="bin-preview" data-aos="fade-up">
      <div className="bin-preview-card" onClick={() => navigate(`/bin/${bin.id}`)}>
        <img 
          src={bin.image} 
          alt="Card Preview" 
          className="bin-preview-image"
        />
        <button className="bin-preview-button">
          Click for BIN Details
        </button>
      </div>
    </div>
  );
};

export default BinPreview;
