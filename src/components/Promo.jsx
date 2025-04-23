import { useData } from '../context/DataContext';
import '../styles/Promo.css';

const Promo = () => {
  const { promos } = useData();
  
  if (promos.length === 0) {
    return null;
  }
  
  // Display only the first active promo
  const promo = promos[0];
  
  return (
    <div 
      className="promo-container"
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div className="promo-dots"></div>
      <p className="promo-text">{promo.text}</p>
    </div>
  );
};

export default Promo;