import { useData } from '../context/DataContext';
import MethodCard from '../components/MethodCard';
import '../styles/Methods.css';

const Methods = () => {
  const { methods } = useData();
  
  return (
    <div className="container methods-container">
      <h1 className="methods-title" data-aos="fade-down">
        Methods & Tutorials
      </h1>
      
      <div className="methods-grid">
        {methods.map((method) => (
          <MethodCard key={method.id} method={method} />
        ))}
      </div>
    </div>
  );
};

export default Methods;
