import { useParams, useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import MethodCard from '../components/MethodCard';
import '../styles/Methods.css';

const MethodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { methods } = useData();
  
  const method = methods.find(m => m.id === parseInt(id));
  
  if (!method) {
    return (
      <div className="container text-center">
        <h2>Method not found</h2>
        <button 
          className="btn btn-primary mt-md"
          onClick={() => navigate('/methods')}
        >
          Back to Methods
        </button>
      </div>
    );
  }
  
  return (
    <div className="container method-details-container">
      <button 
        className="back-button"
        onClick={() => navigate('/methods')}
      >
        ← Back to Methods
      </button>
      
      <div className="method-details-wrapper">
        <MethodCard method={method} />
      </div>
    </div>
  );
};

export default MethodDetails;
