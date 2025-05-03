import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Methods.css';

const Methods = () => {
  const { methods } = useData();
  const navigate = useNavigate();
  
  return (
    <div className="container methods-container">
      <h1 className="methods-title" data-aos="fade-down">
        Methods & Tutorials
      </h1>
      
      <div className="methods-grid">
        {methods.map((method) => (
          <div 
            key={method.id} 
            className="method-preview-card"
            onClick={() => navigate(`/methods/${method.id}`)}
            data-aos="fade-up"
          >
            <h2>{method.title}</h2>
            <p className="method-preview-description">
              Click to view detailed instructions and steps
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methods;
