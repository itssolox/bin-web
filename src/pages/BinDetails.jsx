import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import BinCard from '../components/BinCard';
import '../styles/BinDetails.css';

const BinDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bins } = useData();
  
  const bin = bins.find(b => b.id === parseInt(id));
  
  if (!bin) {
    return (
      <div className="container text-center">
        <h2>BIN not found</h2>
        <button 
          className="btn btn-primary mt-md"
          onClick={() => navigate('/')}
        >
          Go Back Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="container bin-details-page">
      <button 
        className="back-button"
        onClick={() => navigate('/')}
      >
        ← Back to Home
      </button>
      
      <div className="bin-details-wrapper">
        <BinCard bin={bin} />
      </div>
    </div>
  );
};

export default BinDetails;
