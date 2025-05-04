import { useData } from '../context/DataContext';
import BinPreview from '../components/BinPreview';
import '../styles/Bins.css';

const Bins = () => {
  const { bins } = useData();
  
  return (
    <div className="container bins-container">
      <h1 className="bins-title" data-aos="fade-down">
        Available BINs
      </h1>
      
      <div className="bins-grid">
        {bins.map((bin, index) => (
          <div 
            key={bin.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <BinPreview bin={bin} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bins;
